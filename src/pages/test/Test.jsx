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

  let questionobj = []
  let obj = {}


  console.log(paper)

  useEffect(() => {

    const getPaper = async () => {
      const url2 = "https://lmsapiv01.azurewebsites.net/api/qbaf/1";
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
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
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
    }
    else {
      setShowScore(true);
    }
  }

  const goPrev = () => {
    if (currentQuestion - 1 >= 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
    setIsDisabled(true)
  }

  return (
    <div className="timer-wrapper">
      <div className='quizz-app'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {quizLength + 1}
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-diff'>Difficulty:{paper[currentQuestion].Difficulty}</div>
              <div className='question-diff1'>Marks: {paper[currentQuestion].Marks}</div>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{quizLength + 1}
              </div>
              <div className='question-text'>{paper[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {paper[currentQuestion].answerOptions.map((answerOption) => (
                <button disabled={isDisabled} type='radio' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
              {/* <button disabled={isDisabled} type='radio' onClick={() => handleAnswerOptionClick(paper[currentQuestion].answerOptions[0].isCorrect)}>{paper[currentQuestion].answerOptions[0].answerText}</button> */}
              {/* <button disabled={isDisabled} type='radio' onClick={() => handleAnswerOptionClick(paper[currentQuestion].answerOptions[1].isCorrect)}>{paper[currentQuestion].answerOptions[1].answerText}</button> */}
              {/* <button disabled={isDisabled} type='radio' onClick={() => handleAnswerOptionClick(paper[currentQuestion].answerOptions[2].isCorrect)}>{paper[currentQuestion].answerOptions[2].answerText}</button> */}
              {/* <button disabled={isDisabled} type='radio' onClick={() => handleAnswerOptionClick(paper[currentQuestion].answerOptions[3].isCorrect)}>{paper[currentQuestion].answerOptions[3].answerText}</button> */}
            </div>
            <button className='prevbutton' onClick={() => goPrev()}>Previous</button>
            <button className='nextbutton' onClick={() => goNext()}>Next</button>
          </>
        )}
      </div>
      <CountdownCircleTimer
        isPlaying
        duration={getduration}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[60, 0.6 * 60, 0.3 * 60, 0]}
        onComplete={() => setShowScore(true)}
      >
        {children}
      </CountdownCircleTimer>
      <div className="image-capture">
        <Ml />
        {/* {console.log(count)} */}
        {/* <Speech/> */}
      </div>
    </div >
  );
};
export default Test;