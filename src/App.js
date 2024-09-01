import React, { useState } from 'react';
import './App.css';
import HistoryQuiz from './History';
import SportsQuiz from './Sports';
import PoliticsQuiz from './Politics';
import FoodQuiz from './Food';
import ScienceQuiz from './Science';

function App() 
{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(null);
  const [quizType, setQuizType] = useState(null);

  const handleLogin = () => 
  {

    const fixedUsername = "ANWESHAGUHA";
    const fixedPassword = "22BCE3376";
  
   
    if (username === fixedUsername && password === fixedPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Your username or password is incorrect.");
    }
  };
  

  const handleLogout = () => 
  {
    setIsLoggedIn(false);
    setScore(null);
    setQuizType(null);
    setUsername('');
    setPassword('');
  };

  const handleFinish = (score) => 
  {
    setScore(score);
  };

  const renderQuiz = () => {
    switch (quizType) {
      case 'History':
        return <HistoryQuiz onFinish={handleFinish} />;
      case 'Sports':
        return <SportsQuiz onFinish={handleFinish} />;
      case 'Politics':
        return <PoliticsQuiz onFinish={handleFinish} />;
      case 'Food':
        return <FoodQuiz onFinish={handleFinish} />;
      case 'Science':
        return <ScienceQuiz onFinish={handleFinish} />;

      default:
        return null;
    }
  };

  return (
    <div className="design">
      {!isLoggedIn ? (
        <div className='logindesign'>
          <h1>User Login</h1>

          <p >
           Answer 4 questions in 15 sec!
          </p>
          <input
            type="text"
            className='internalstuff'
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)  }
          />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              className='internalstuff'
          />

          <br></br>
          <button onClick={handleLogin}  className='internalstuff'>Login</button>


       
        </div>
      ) : (
        <div>
          {score !== null ? (
            <div>
              <div className="result">Your final score is: {score} / 4</div>
              <button onClick={() => setScore(null)}>Restart Quiz</button>
              <button className="logoutbutton" onClick={handleLogout} >Logout</button>
            </div>
          ) : (
            <div>
              <h1 align="center">Trivia Master</h1>
              <h3 align="center">Which quiz do you wish to play?</h3>
              <div className="button-container">
                <button type="button" className="buttonmain" onClick={() => setQuizType('History')}>HISTORY</button>
                <button type="button" className="buttonmain" onClick={() => setQuizType('Sports')}>SPORTS</button>
                <button type="button" className="buttonmain" onClick={() => setQuizType('Politics')}>POLITICS</button>
                <button type="button" className="buttonmain" onClick={() => setQuizType('Food')}>FOOD</button>
                <button type="button" className="buttonmain" onClick={() => setQuizType('Science')}>SCIENCE</button>
              </div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}

     
          {quizType && renderQuiz()}
        </div>
      )}
    </div>
  );
}

export default App;
