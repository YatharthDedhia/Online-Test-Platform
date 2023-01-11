// import Quiz from 'react-quiz-component';
// import { quiz } from 'quiz';
import Ml from '../ML/ml';
import ReactDOM from "react-dom";
import './css/test.css'
import Webcam from 'react-webcam';
import React, { useState, useEffect } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import axios from 'axios';
import './css/timer.css';
import { registry } from 'chart.js';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
];

let answerOptions = []
let option1 = {}

let QuestionNo = [];
const Questions = (e) => {
  // e.preventDefault();
  const url = "https://viveklmsapi01.azurewebsites.net/api/questions/1";
  axios
    .get(url)
    .then((response) => {
      console.log(response.data[0])
      for (let i = 0; i < response.data[0].length; i++) {
        // QuestionNo = response.data[0][i].QuestNo
        QuestionNo.push(response.data[0][i].QuestNo)
        console.log(QuestionNo)
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

const Options = (e) => {
  // e.preventDefault();
  const url = "https://viveklmsapi01.azurewebsites.net/api/answers";
  axios
    .get(url)
    .then((response) => {
      console.log(response.data[0])

      for (let i = 0; i < response.data[0].length; i++) {
        console.log(response.data[0][i].QuestNo)
        for (let j = 0; j < QuestionNo.length; j++) {
          if (response.data[0][i].QuestNo == QuestionNo[j]) {
            console.log(response.data[0][i].Answer)
          }
        }
        option1.answerText = response.data[0][i].Answer
        option1.isCorrect = response.data[0][i].isCorrect
        answerOptions.push(option1)
        console.log("option1: ", answerOptions)
      }

    })
    .catch((err) => {
      console.log(err);
    });
}

const children = ({ remainingTime }) => {
  const hours = Math.floor(remainingTime / 3600)
  const minutes = Math.floor((remainingTime % 3600) / 60)
  const seconds = remainingTime % 60
  return `${hours}:${minutes}:${seconds}`
}
const postData = (e) => {
  e.preventDefault();
    const sendQuestions = {
      "QuestNo":20,
      "CourseId": 1,
      "Question": "Which is the largest planet",
      "Marks":2,
      "Difficulty":3,
      // "MobileNo": parseInt(mobile),
      // "LastLoginDateTime": "2022-11-27T00:00:00.000Z",
      // "DateOfBirth": "1974-07-13T00:00:00.000Z",
      // "Age": 26,
      // "TypeId": String(parseInt(type)),
      // "ActivationStatus": '0'
    };

    console.log(sendQuestions);

    axios.post('https://viveklmsapi01.azurewebsites.net/api/questionbank', sendQuestions).then(result => { console.log(result.data) });
  };
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user'
};

const WebLiveCapture = () => {
  const webcamRef = React.useRef(null);
  const [image, setImage] = useState('');
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
      // console.log('Captured');
    },
    [webcamRef]
  );

  return (
    <React.Fragment>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        height={150}
        width={300}
        videoConstraints={videoConstraints}
      />

      {/* <Ml/> */}

      <button className="hide" onClick={capture}>
        Capture photo
      </button>
    </React.Fragment>
  );
};

const Quizz = () => {

  useEffect(() => {
    Questions();
    Options();
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAns, setCurrentAns] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [AnsOption, setAnsOption] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(0);
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion > questions.length) {
      setShowScore(true);
      // setCurrentQuestion(nextQuestion);
    }
  };

  const goNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
    else {
      setShowScore(true);
    }
  }

  const goPrev = () => {
    if (currentQuestion - 1 >= 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  return (
    <div className='quizz-app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button type='radio' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
          <button className='nextbutton' onClick={() => goNext()}>Next</button>
          <button className='prevbutton' onClick={() => goPrev()}>Previous</button>
        </>
      )}
    </div>
  );
}

const Test = () => {
  return (
    <div className="timer-wrapper">
      {/* <Quiz quiz={quizzz} shuffle={true}/> */}
      <Quizz />
      <CountdownCircleTimer
        isPlaying
        duration={60}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[60, 0.6 * 60, 0.3 * 60, 0]}
      // onComplete={() => (setShowScore(true))}
      >
        {children}
      </CountdownCircleTimer>
      <div className="image-capture">
        {/* <WebLiveCapture /> */}
        <postData />
        <Ml />
      </div>
    </div >
  );
};
export default Test;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
