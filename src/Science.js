import React, { useState, useEffect } from 'react';
import './General.css';

function ScienceQuiz({ onFinish }) {
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
    const a = document.getElementsByName('question1');
    const b = document.getElementsByName('question2');
    const c = document.getElementsByName('question3');
    const d = document.getElementsByName('question4');

    // Check answers
    if (a[0].checked) newScore++;
    if (b[2].checked) newScore++;
    if (c[2].checked) newScore++;
    if (d[1].checked) newScore++;

    setScore(newScore);
    onFinish(newScore);
    console.log('Score calculated:', newScore);
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
        <p>What is the chemical symbol for water?</p>
        <input type="radio" id="q11" name="question1" value="a" /> H2O
        <input type="radio" id="q12" name="question1" value="b" /> HO2
        <input type="radio" id="q13" name="question1" value="c" /> H2O2
      </div>

      <div className="question" onMouseDown={handleMouseDown}>
        <p>What is the closest planet to the Sun?</p>
        <input type="radio" id="q21" name="question2" value="a" /> Earth
        <input type="radio" id="q22" name="question2" value="b" /> Venus
        <input type="radio" id="q23" name="question2" value="c" /> Mercury
      </div>

      <div className="question" onMouseDown={handleMouseDown}>
        <p>Which gas do plants use for photosynthesis?</p>
        <input type="radio" id="q31" name="question3" value="a" /> Oxygen
        <input type="radio" id="q32" name="question3" value="b" /> Nitrogen
        <input type="radio" id="q33" name="question3" value="c" /> Carbon dioxide
      </div>

      <div className="question" onMouseDown={handleMouseDown}>
        <p>The unit of current is:</p>
        <input type="radio" id="q41" name="question4" value="a" /> Volts
        <input type="radio" id="q42" name="question4" value="b" /> Ampere
        <input type="radio" id="q43" name="question4" value="c" /> Ohm
      </div>

      <button type="button" className="button" onClick={calc}>FINISH THE QUIZ</button>

      <div className="result">Your final score is: {score} / 4</div>
    </div>




  );
}

export default ScienceQuiz;
