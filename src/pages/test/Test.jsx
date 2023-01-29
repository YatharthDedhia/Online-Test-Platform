import Ml from '../ML/ml';
import './css/test.css'
import React, { useState, useEffect } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import axios from 'axios';
import './css/timer.css';

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

const test = [
  {
    questionText: 'Dummy Question',
    Difficulty: 0,
    Marks: 0,
    answerOptions: [
      { answerText: 'Option 1', isCorrect: false },
      { answerText: 'Option 2', isCorrect: false },
      { answerText: 'Option 3', isCorrect: true },
      { answerText: 'Option 4', isCorrect: false },
    ],
  }
];

const children = ({ remainingTime }) => {
  const hours = Math.floor(remainingTime / 3600)
  const minutes = Math.floor((remainingTime % 3600) / 60)
  const seconds = remainingTime % 60
  return `${hours}:${minutes}:${seconds}`
}

const Test = () => {

  const [paper, setPaper] = useState(test)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [quizLength, setquizLength] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [active, setActive] = useState(false);
  const [getduration, setduration] = useState(60);
  const [response, setResponse] = useState([])

  console.log(paper)

  useEffect(() => {
    let papercode = localStorage.getItem('papercode').toString();
    // console.log(papercode);
    const getPaper = async () => {
      // setPaper(test)
      const url2 = "https://lmsapiv01.azurewebsites.net/api/questionpaper/" + papercode;
      await axios
        .get(url2)
        .then((response) => {
          // console.log(response.data[0])

          setquizLength(response.data[0].length / 4)

          for (let i = 0; i < response.data[0].length; i += 4) {
            let tempobj1 = {}

            let tempobj21 = {}
            let tempobj22 = {}
            let tempobj23 = {}
            let tempobj24 = {}

            let temparr = []

            tempobj1["CourseId"] = response.data[0][i].CourseId;
            tempobj1["QuestNo"] = response.data[0][i].QuestNo;
            tempobj1["Marks"] = response.data[0][i].Marks;
            tempobj1["Difficulty"] = response.data[0][i].Difficulty;
            tempobj1["AnswerId"] = response.data[0][i].AnswerId;
            tempobj1["Weightage"] = response.data[0][i].Weightage;
            tempobj1["questionText"] = response.data[0][i].Question;

            tempobj21["answerText"] = response.data[0][i].Answer;
            tempobj22["answerText"] = response.data[0][i + 1].Answer;
            tempobj23["answerText"] = response.data[0][i + 2].Answer;
            tempobj24["answerText"] = response.data[0][i + 3].Answer;

            tempobj21["isCorrect"] = response.data[0][i].isCorrect;
            tempobj22["isCorrect"] = response.data[0][i + 1].isCorrect;
            tempobj23["isCorrect"] = response.data[0][i + 2].isCorrect;
            tempobj24["isCorrect"] = response.data[0][i + 3].isCorrect;

            tempobj21["selected"] = false
            tempobj22["selected"] = false
            tempobj23["selected"] = false
            tempobj24["selected"] = false

            temparr.push(tempobj21)
            temparr.push(tempobj22)
            temparr.push(tempobj23)
            temparr.push(tempobj24);

            tempobj1["answerOptions"] = temparr;
            paper.push(tempobj1);
            // console.log(paper);
          }
          // console.log(paper);

        })
        .catch((err) => {
          console.log(err);
        });
    }

    getPaper();
    // console.log(paper)
  }, []);

  const submitscore = () => {
    let student_response = "";

    for (let i = 1; i < paper.length; i++) {
      let ans_code_common = paper[i].AnswerId;
      for (let j = 0; j < 4; j++) {
        if (paper[i].answerOptions[j].selected === true) {
          // student_response + String(paper[i].QuestNo) + "=" + String(ans_code_common + j) + "&";
          let str = String(paper[i].QuestNo) + "=" + String(ans_code_common + j) + "&";
          console.log(str);
          student_response += str;
        }
      }
    }
    student_response = student_response.slice(0, -1);
    console.log(student_response);
    const sendData2 = {
      UserId: JSON.parse(localStorage.getItem('login')).user.UserId,
      PaperCode: localStorage.getItem('papercode'),
      StudentResponse: student_response
    }
    console.log(sendData2);
    axios.post("https://lmsapiv01.azurewebsites.net/api/studentresponse/", sendData2).then(result => { console.log(result.data) });
  }

  let tempobj = {};
  const handleAnswerOptionClick = (answerOption, index) => {
    for (let i = 0; i < 4; i++) {
      if (i === index) {
        paper[currentQuestion].answerOptions[i].selected = true;
      }
      else {
        paper[currentQuestion].answerOptions[i].selected = false;
      }
    }

    if (answerOption.isCorrect) {
      setScore(score + 1);
      setIsDisabled(true)
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion > paper.length) {
      setShowScore(true);
    }
    setActive(!active);
  };

  const goNext = () => {
    if (currentQuestion + 1 < paper.length) {
      setCurrentQuestion(currentQuestion + 1);
      setIsDisabled(false)
      // student_response + currentQuestion.toString() + "&";
    }
    else {
      setShowScore(true);
      submitscore();
    }
  }

  const goPrev = () => {
    if (currentQuestion - 1 >= 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
    setIsDisabled(false)
  }

  return (
    <div className="timer-wrapper">
      {console.log(paper)};
      {quizLength >= 0 ? (
        <div className='quizz-app'>
          {showScore ? (
            <div className='score-section'>
              You scored {score} out of {quizLength + 1}
            </div>
          ) : (
            <>

              <div>
                <div className='question-section'>

                  <div className='question-diff'>Difficulty:{paper[currentQuestion].Difficulty}</div>
                  <div className='question-diff1'>Marks: {paper[currentQuestion].Marks}</div>
                  <div className='question-count'>
                    <span>Question {currentQuestion + 1}</span>/{quizLength + 1}
                  </div>
                  <div className='question-text'>{paper[currentQuestion].questionText}</div>
                </div>
                <div className='answer-section'>
                  {paper[currentQuestion].answerOptions.map((answerOption, ind) => (
                    <button disabled={isDisabled} onClick={() => handleAnswerOptionClick(answerOption, ind)}>{answerOption.answerText}</button>
                  ))}
                </div>
                <button className='prevbutton' onClick={() => goPrev()}>Previous</button>
                <button className='nextbutton' onClick={() => goNext()}>Next</button>
              </div>
            </>
          )}
        </div>
      ) : null}

      <div>
        {!showScore ? (
          <div>
            <CountdownCircleTimer
              isPlaying
              duration={localStorage.getItem('duration')*60}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[60, 0.6 * 60, 0.3 * 60, 0]}
              onComplete={() => setShowScore(true)}
            >
              {children}
            </CountdownCircleTimer>
            <div className="image-capture">
              <Ml />
            </div>
          </div>
        ) : null}
      </div >
    </div>
  );
};
export default Test;