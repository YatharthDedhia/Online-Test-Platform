# import sys
from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import cv2
import base64
from tflite_runtime import interpreter

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def generate_id(x_train):
    preter = interpreter.Interpreter(model_path='./model/model.tflite')
    preter.allocate_tensors()
    output_details = preter.get_output_details()

    input_index = preter.get_input_details()[0]["index"]
    preter.set_tensor(input_index, x_train)
    preter.invoke()
    embedding = preter.get_tensor(output_details[0]['index'])[0]
    id = embedding / np.linalg.norm(embedding, ord=2)
    return id


def img_process(image_path):
    img = cv2.imread(image_path)
    classifier = cv2.CascadeClassifier(
        cv2.data.haarcascades+"haarcascade_frontalface_default.xml")
    faces = classifier.detectMultiScale(
        img,  # stream
        scaleFactor=1.10,  # change these parameters to improve your video processing performance
        minNeighbors=20,
        minSize=(30, 30)  # min image detection size
    )
    print(faces)

    input_img = img
    for (x, y, w, h) in faces:
        input_img = img[y:y+h, x:x+w]
    input_img = cv2.resize(input_img, (160, 160))
    img = np.around(np.array(input_img) / 255.0, decimals=12)
    img = img.astype(np.float32)

    x_train = np.expand_dims(img, axis=0)
    return generate_id(x_train)


def who_is_it(image_path, database):
    encoding = generate_id(image_path)
    min_dist = 100

    for (name, db_enc) in database.items():
        print("checked", name)
        dist = np.linalg.norm(encoding - db_enc)
        print(dist, name)
        if dist < min_dist:
            min_dist = dist
            identity = name
    if min_dist > 0.7:
        print("Not in the database.")
    else:
        print("it's " + str(identity) + ", the distance is " + str(min_dist))

    return min_dist, identity


database = {}
database["yatharth"] = img_process("data/Photo-1.jpeg")
database["papa"] = img_process("data/dad.jpg")
database["manav"] = img_process("data/pic4.jpeg")
database["vivek"] = img_process("data/vivek.jpg")
database["mummy"] = img_process("data/pic66.jpeg")
database["akash"] = img_process("data/akash1.jpeg")


@app.websocket('/facenet')
async def get_gesture(ws: WebSocket):
    await ws.accept()
    # data = await ws.receive()
    # print(data)
    print("data received")

    while True:
        data = await ws.receive()
        print("data received")

        if data['text'] != 'null':
            face_bytes = bytes(str(data['text']), 'utf-8')
            face_bytes = face_bytes[face_bytes.find(b'/9'):]
            face_img = base64.b64decode(face_bytes)
            np_img = np.frombuffer(face_img, np.uint8)
            cv_img = cv2.imdecode(np_img, cv2.IMREAD_COLOR)

            classifier = cv2.CascadeClassifier(
                cv2.data.haarcascades+"haarcascade_frontalface_default.xml")

            faces = classifier.detectMultiScale(
                cv_img,  # stream
                scaleFactor=1.10,  # change these parameters to improve your video processing performance
                minNeighbors=20,
                minSize=(30, 30)  # min image detection size
            )

            print("FACES:", faces)
            input_img = cv_img

            for (x, y, w, h) in faces:
                input_img = cv_img[y:y+h, x:x+w]

            # input_img = cv_img[y:y+h, x:x+w]
            # cv2.imshow("window", input_img)
            # cv2.waitKey(10)

            input_img = cv2.resize(input_img, (160, 160))

            img = np.around(np.array(input_img) / 255.0, decimals=12)
            img = img.astype(np.float32)

            x_train = np.expand_dims(img, axis=0)

            dist, id = who_is_it(x_train, database)
            print(dist, id)

        else:
            continue
        if dist is None:
            dist = -1
        obj = {'id': str(id), 'dist': str(dist)}
        print(obj)
        await ws.send_json(obj)
        # ws.close()

# data = ""

# face_bytes = bytes(str(data), 'utf-8')
# face_bytes = face_bytes[face_bytes.find(b'/9'):]
# face_img = base64.b64decode(face_bytes)
# np_img = np.frombuffer(face_img, np.uint8)
# cv_img = cv2.imdecode(np_img, cv2.IMREAD_COLOR)

# classifier = cv2.CascadeClassifier(
#     cv2.data.haarcascades+"haarcascade_frontalface_default.xml")

# faces = classifier.detectMultiScale(
#     cv_img,  # stream
#     scaleFactor=1.10,  # change these parameters to improve your video processing performance
#     minNeighbors=20,
#     minSize=(30, 30)  # min image detection size
# )

# print("FACES:", faces)
# input_img = cv_img

# for (x, y, w, h) in faces:
#     input_img = cv_img[y:y+h, x:x+w]

# # input_img = cv_img[y:y+h, x:x+w]
# cv2.imshow("window", input_img)
# cv2.waitKey(0)

# input_img = cv2.resize(input_img, (160, 160))

# img = np.around(np.array(input_img) / 255.0, decimals=12)
# img = img.astype(np.float32)

# x_train = np.expand_dims(img, axis=0)

# dist, id = who_is_it(x_train, database)
# print(dist, id)


@app.on_event('shutdown')
def close_objects():
    database.close()
