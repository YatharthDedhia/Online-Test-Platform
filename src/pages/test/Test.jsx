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
    questionText: '',
    answerOptions: [
      { answerText: '', isCorrect: false },
      { answerText: '', isCorrect: false },
      { answerText: '', isCorrect: true },
      { answerText: '', isCorrect: false },
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
  const [Difficulty, setDifficulty] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  let questionobj = []
  let obj = {}

  const getPaper = () => {
    const url2 = "https://lmsapiv01.azurewebsites.net/api/qbaf/1";
    axios
      .get(url2)
      .then((response) => {
        console.log(response.data[0])
        setquizLength(response.data[0].length / 4)
        for (let j = 0; j < (response.data[0].length); j++) {
          obj["questionText"] = response.data[0][j].Question
          setDifficulty(response.data[0][j].Difficulty)
          // console.log(j)
          let temparr = []
          for (let i = 0; i < 4; i++) {
            let tempobj = {}
            console.log(i + j)
            tempobj["answerText"] = response.data[0][i + j].Answer
            tempobj["isCorrect"] = response.data[0][i + j].isCorrect

            temparr.push(tempobj)
            obj["answerOptions"] = temparr
          }
          console.log(obj)
          questionobj.push(obj)
          j += 3
        }

        // console.log(questionobj[0].questionText)
        setPaper(questionobj)
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(questionobj[0].questionText)

  }
  console.log(paper)

  useEffect(() => {
    // Questions();
    // Options();
    getPaper();
  }, []);

  // const url2 = "https://lmsapiv01.azurewebsites.net/api/qbaf/1";
  // axios
  //   .get(url2)
  //   .then((response) => {
  //     console.log(response.data[0][0].Answer)
  //     setquizLength(Math.round(response.data[0].length / 4));
  //     for (let i = 0; i < response.data[0].length; i++) {
  //       setCurrentAns(response.data[0][0].Answer);
  //       setQuestion(response.data[0][0].Question);
  //       setScore(response.data[0][i].Marks);
  //       setDifficulty(response.data[0][0].Difficulty);
  //     }

  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(0);
      setScore(score + 1);
      setIsDisabled(true)
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion > paper.length) {
      setShowScore(true);
      // setCurrentQuestion(nextQuestion);
    }
  };

  const goNext = () => {
    if (currentQuestion + 1 < paper.length) {
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
    <div className="timer-wrapper">
      <div className='quizz-app'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {quizLength}
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-diff'>Difficulty:{Difficulty}</div>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{quizLength}
              </div>
              <div className='question-text'>{paper[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {paper[currentQuestion].answerOptions.map((answerOption) => (
                <button disabled={isDisabled} type='radio' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
            <button className='nextbutton' onClick={() => goNext()}>Next</button>
            <button className='prevbutton' onClick={() => goPrev()}>Previous</button>
          </>
        )}
      </div>
      <CountdownCircleTimer
        isPlaying
        duration={6}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[60, 0.6 * 60, 0.3 * 60, 0]}
        onComplete={() => setShowScore(true)}
      >
        {children}
      </CountdownCircleTimer>
      <div className="image-capture">
        <Ml />
        {/* <Speech/> */}
      </div>
    </div >
  );
};
export default Test;