  import React, { useState, useEffect } from 'react';
  import './General.css'; 

  function FoodQuiz({ onFinish }) {
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(15); 

    useEffect(() => 
    {
    
      const interval = setInterval(() => 
      {
        setTimer((prevTimer) => 
        {
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
      const a = document.getElementsByName('pie');
      const b = document.getElementsByName('kash');
      const c = document.getElementsByName('bong');
      const d = document.getElementsByName('pic');

      for (let i = 0; i < a.length; i++) {
        if (a[i].checked && a[i].value === 'beef') {
          newScore++;
        }
      }

      for (let i = 0; i < b.length; i++) {
        if (b[i].checked && b[i].value === 'Kashmiri') {
          newScore++;
        }
      }

      for (let i = 0; i < c.length; i++) {
        if (c[i].checked && c[i].value === 'must') {
          newScore++;
        }
      }

      for (let i = 0; i < d.length; i++) {
        if (d[i].checked && d[i].value === 'rat') {
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
          <p onMouseDown={handleMouseDown}>What meat is used to make a cottage pie?</p>
          <input type="radio" id="q11" name="pie" value="beef" /> Beef
          <input type="radio" id="q12" name="pie" value="chicken" /> Chicken
          <input type="radio" id="q13" name="pie" value="mutton" /> Mutton
        </div>

        <div className="question">
          <p onMouseDown={handleMouseDown}>Rogan Josh is the signature dish of which cuisine?</p>
          <input type="radio" id="q21" name="kash" value="Kashmiri" /> Kashmiri
          <input type="radio" id="q22" name="kash" value="Mughlai" /> Mughlai
          <input type="radio" id="q23" name="kash" value="Awadhi" /> Awadhi
        </div>

        <div className="question">
          <p onMouseDown={handleMouseDown}>What is the quintessential ingredient of Bengali cuisine?</p>
          <input type="radio" id="q31" name="bong" value="coco" /> Coconut Oil
          <input type="radio" id="q32" name="bong" value="must" /> Mustard Oil
          <input type="radio" id="q33" name="bong" value="curry" /> Curry leaves
        </div>

        <div className="question">
          <p onMouseDown={handleMouseDown}>What food is this?</p>
          <img src="/ratatouille.jpg" alt="Ratatouille" width="350" height="300"/>
          <br/>
          <br/>
          <input type="radio" id="q41" name="pic" value="ceasar" /> Ceasar Salad
          <input type="radio" id="q42" name="pic" value="rat" /> Ratatouille
          <input type="radio" id="q43" name="pic" value="fettucine" /> Mexican Fettucine pasta
        </div>

        <button type="button" className="button" onClick={calc}>FINISH THE QUIZ</button>

        <div className="result">Your final score is: {score} / 4</div>
      </div>
    );
  }

  export default FoodQuiz;
