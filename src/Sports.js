import React, { useState, useEffect } from 'react';
import './General.css';

function SportsQuiz({ onFinish }) {
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
    const a = document.getElementsByName('birth');
    const b = document.getElementsByName('bestPlayer');
    const c = document.getElementsByName('hockey');
    const d = document.getElementsByName('pic');

    for (let i = 0; i < a.length; i++) {
      if (a[i].checked && a[i].value === 'jam') {
        newScore++;
      }
    }

    for (let i = 0; i < b.length; i++) {
      if (b[i].checked && b[i].value === 'km') {
        newScore++;
      }
    }

    for (let i = 0; i < c.length; i++) {
      if (c[i].checked && c[i].value === 'bra') {
        newScore++;
      }
    }

    for (let i = 0; i < d.length; i++) {
      if (d[i].checked && d[i].value === 'woods') {
        newScore++;
      }
    }

    setScore(newScore);
    onFinish(newScore);
  };

  const handleMouseDown = (event) => {
    if (event.target.tagName === 'P') {
      alert("Copying the question text is not allowed!");
    }
  };

  return (
    <div className="design">
      <div className="timer">Time left: {timer} seconds</div>
      <div className="question" onMouseDown={handleMouseDown}>
        <p>Which country is the birthplace of Usain Bolt, the fastest man on Earth?</p>
        <input type="radio" id="q11" name="birth" value="jam" /> Jamaica
        <input type="radio" id="q12" name="birth" value="us" /> United States
        <input type="radio" id="q13" name="birth" value="can" /> Canada
      </div>

      <div className="question" onMouseDown={handleMouseDown}>
        <p>Who was awarded the “Golden Ball” as the best player in the 2014 FIFA World Cup?</p>
        <input type="radio" id="q21" name="bestPlayer" value="ne" /> Neymar
        <input type="radio" id="q22" name="bestPlayer" value="rm" /> Lionel Messi
        <input type="radio" id="q23" name="bestPlayer" value="km" /> James Rodriguez
      </div>

      <div className="question" onMouseDown={handleMouseDown}>
        <p>Which country has won the most FIFA World Cup titles?</p>
        <input type="radio" id="q31" name="hockey" value="bra" /> Brazil
        <input type="radio" id="q32" name="hockey" value="ger" /> Germany
        <input type="radio" id="q33" name="hockey" value="arg" /> Argentina
      </div>

      <div className="question" onMouseDown={handleMouseDown}>
        <p>Identify this famous athlete.</p>
        <img src="/tigerwoods.jpg" alt="Tiger Woods" width="350" height="300" />
        <br/>
        <br/>
        <input type="radio" id="q41" name="pic" value="lewis" /> Carl Lewis
        <input type="radio" id="q42" name="pic" value="woods" /> Tiger Woods
        <input type="radio" id="q43" name="pic" value="phelps" /> Michael Phelps
      </div>

      <button type="button" className="button" onClick={calc}>FINISH THE QUIZ</button>

      <div className="result">Your final score is: {score} / 4</div>
    </div>
  );
}

export default SportsQuiz;
