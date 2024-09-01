import React, { useState, useEffect } from 'react';
import './General.css';

function PoliticsQuiz({ onFinish }) {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
          alert("Time's up! Stop!");
          return prevTimer;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const calc = () => {
    let newScore = 0;
    const a = document.getElementsByName('house');
    const b = document.getElementsByName('CM');
    const c = document.getElementsByName('presi');
    const d = document.getElementsByName('pic');

    for (let i = 0; i < a.length; i++) {
      if (a[i].checked && a[i].value === 'two') {
        newScore++;
      }
    }

    for (let i = 0; i < b.length; i++) {
      if (b[i].checked && b[i].value === 'Sucheta Kripalani') {
        newScore++;
      }
    }

    for (let i = 0; i < c.length; i++) {
      if (c[i].checked && c[i].value === 'Dr. Rajendra Prasad') {
        newScore++;
      }
    }

    for (let i = 0; i < d.length; i++) {
      if (d[i].checked && d[i].value === 'amin') {
        newScore++;
      }
    }

    setScore(newScore);
    onFinish(newScore);
  };

  const handleMouseDown = (event) => {
    if (event.target.tagName === 'P') {
      alert("Copying the question text is not allowed!Stop copying text!");
    }
  };

  return (
    <div className="design">
       <div className="timer">Time left: {timer} seconds</div>
      <div className="question" onMouseDown={handleMouseDown}>
        <p>How many houses are there in the Indian parliament?</p>
        <input type="radio" id="q11" name="house" value="one" /> One
        <input type="radio" id="q12" name="house" value="two" /> Two
        <input type="radio" id="q13" name="house" value="three" /> Three
      </div>

      <div className="question" onMouseDown={handleMouseDown}>
        <p>Who was the very first woman to become the Chief Minister of an Indian state?</p>
        <input type="radio" id="q21" name="CM" value="Mayawati" /> Mayawati
        <input type="radio" id="q22" name="CM" value="Sucheta Kripalani" /> Sucheta Kripalani
        <input type="radio" id="q23" name="CM" value="Jayalalitha" /> Jayalalitha
      </div>

      <div className="question" onMouseDown={handleMouseDown}>
        <p>Who was the first President of India?</p>
        <input type="radio" id="q31" name="presi" value="Sardar Vallabhbhai Patel" /> Sardar Vallabhbhai Patel
        <input type="radio" id="q32" name="presi" value="Dr. Rajendra Prasad" /> Dr. Rajendra Prasad
        <input type="radio" id="q33" name="presi" value="Narendra Modi" /> Narendra Modi
      </div>

      <div className="question" onMouseDown={handleMouseDown}>
        <p>Identify this Ugandan military officer and a brutal despot.</p>
        <img src="/idiamin.jpg" alt="Idi Amin" width="350" height="300"/>
        <br/>
        <br/>
        <input type="radio" id="q41" name="pic" value="seko" /> Mobutu Sese Seko
        <input type="radio" id="q42" name="pic" value="mugabe" /> Robert Mugabe
        <input type="radio" id="q43" name="pic" value="amin" /> Idi Amin
      </div>

      <button type="button" className="button" onClick={calc}>FINISH THE QUIZ</button>

      <div className="result">Your final score is: {score} / 4</div>
    </div>
  );
}

export default PoliticsQuiz;
