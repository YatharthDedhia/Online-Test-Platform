import React, { useEffect, useRef, useState } from "react";

import './Main.css'
import Webcam from "react-webcam";

function FaceNet() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [logs,setlogs] = useState([])
    const detect = async () => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            console.log("available")
            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Set canvas width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            var socket = new WebSocket('ws://127.0.0.1:8080/facenet')
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext("2d").drawImage(video, 0, 0);
            const data = canvas.toDataURL("image/jpeg");

            socket.onopen = () => {
                console.log("Connection done")
                socket.send(data)
            }

            socket.onmessage = function (event) {
                var pred_log = JSON.parse(event.data)
                console.log(pred_log);
                setlogs(pred_log)
            }
        }
        else {
            console.log("unavailable")
        }
    };

    useEffect(() => {
        setInterval(() => {
            detect();
        }, 5000);
    }, []);
    return (
        <div className="App">
            <Webcam
                ref={webcamRef}
                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 600,
                    top: 20,
                    textAlign: "center",
                    zindex: 9,
                    width: 640,
                    height: 480,
                }}
            />

            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 600,
                    top: 20,
                    textAlign: "center",
                    zindex: 9,
                    width: 640,
                    height: 480,
                }}
            />

            <h1>{logs.id}</h1>
        </div>
    );
}

export default FaceNet
