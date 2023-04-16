import React from 'react';
import '../App.css';

const QuizRes = (props) => {
  return (
      <div className='cont'>
        <div>Successfully Quiz Completed !!!</div>
        <div>Your Score: { (props.score)}</div>
        <div class='btn'><button onClick={props.tryAgain}>TryAgain</button></div>
        </div>
  )
}

export default QuizRes