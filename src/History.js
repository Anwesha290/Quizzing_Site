import React, { useState, useEffect } from 'react';
import './General.css';

function HistoryQuiz({ onFinish }) 
{
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
    const a = document.getElementsByName('lib');
    const b = document.getElementsByName('viceroy');
    const e = document.getElementsByName('pic');
    const f = document.getElementsByName('hockey');
    const v = document.getElementsByName('voice');
  
    for (let i = 0; i < a.length; i++) {
      if (a[i].checked && a[i].value === 'meltcalfe') {
        newScore++;
      }
    }
  
    for (let i = 0; i < b.length; i++) {
      if (b[i].checked && b[i].value === 'mountbatten') {
        newScore++;
      }
    }
  
    for (let i = 0; i < e.length; i++) {
      if (e[i].checked && e[i].value === 'banerjee') {
        newScore++;
      }
    }
  
    for (let i = 0; i < f.length; i++) {
      if (f[i].checked && f[i].value === 'pak') {
        newScore++;
      }
    }
  
    for (let i = 0; i < v.length; i++) {
      if (v[i].checked && v[i].value === ' Hitler') { // Fixed space before Hitler
        newScore++;
      }
    }
  
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
      <div className="question">
        <p onMouseDown={handleMouseDown}>Who was called “Liberator of India Press”?</p>
        <input type="radio" id="q11" name="lib" value="bentick" /> Lord William Bentinck
        <input type="radio" id="q13" name="lib" value="meltcalfe" /> Sir Charles Metcalfe
        <input type="radio" id="q12" name="lib" value="ellenborough" /> Lord Ellenborough
      </div>

      <div className="question">
        <p onMouseDown={handleMouseDown}>Who was the Last Viceroy of India?</p>
        <input type="radio" id="q21" name="viceroy" value="hastings" /> Warren Hastings
        <input type="radio" id="q22" name="viceroy" value="mountbatten" />  Lord Mountbatten
        <input type="radio" id="q23" name="viceroy" value="wellesley" /> Richard Wellesley
      </div>

      <div className="question">
        <p onMouseDown={handleMouseDown}>Identify this famous Indian freedom fighter. He was one of the founding members of the Indian National Congress.</p>
        <img src="/surendranath.jpg" alt="Freedom Fighter" width="350" height="300"/>
        <br/>
        <br/>
        <input type="radio" id="q41" name="pic" value="banerjee" />Surendranath Banerjee
        <input type="radio" id="q42" name="pic" value="das" />Chittaranjan Das
        <input type="radio" id="q43" name="pic" value="bose" /> Sarat Chandra Bose
      </div>

      <div className="question">
        <p onMouseDown={handleMouseDown}>Which country won the most number of Men’s Hockey World Cup champion titles?</p>
        <input type="radio" id="q31" name="hockey" value="aus" /> Australia
        <input type="radio" id="q32" name="hockey" value="ind" /> India
        <input type="radio" id="q33" name="hockey" value="pak" /> Pakistan
      </div>


      <div className="question">
        <p onMouseDown={handleMouseDown}>Whose voice is this?</p>
        <audio controls>
      <source src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Adolf_Hitler_-_Speech.wav" type="audio/wav" />
              Your browser does not support the audio element.
       </audio>

        <input type="radio" id="q41" name="voice" value="Lenin" /> Lenin
        <input type="radio" id="q42" name="voice" value=" Hitler" /> Hitler
        <input type="radio" id="q43" name="voice" value="Himmler" /> Himmler
      </div>

      <button type="button" className="button" onClick={calc}>FINISH THE QUIZ</button>

      <div className="result">Your final score is: {score} / 5</div>
    </div>
  );
}

export default HistoryQuiz;
