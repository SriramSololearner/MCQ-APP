import {useState} from 'react'
import '../App.css';  
import { QuizData } from '../Data/QuizData';
import QuizRes from './QuizRes';


const Quiz = () => {
    const [curQ, setCurQ] = useState(0);
    const [score, setScore] = useState(0);
    const [clicked, setClicked] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const CQ=()=>{
        res();
        if(curQ< QuizData.length-1){
            setCurQ(curQ + 1);
            setClicked(0);
        }
        else{
          setShowResult(true);

        }
    }

    const res=()=>{
        if(clicked ===QuizData[curQ].answer){
            setScore(score+1);
        }
    }

    const Reset=()=>{
      setShowResult(false);
      setCurQ(0);
      setClicked(0);
      setScore(0);
    }



  return (
    <div>
        <p className='heading-text'>Quiz APP</p>
        <div className='container'>
          {showResult ? (<QuizRes score={score} tryAgain={Reset}/>
          ):(
            <>
            <div className='question'>
              <span>{curQ + 1}</span>.
              <span>{QuizData[curQ].question}</span>

            </div>
            <div className='options'>
              {QuizData[curQ].options.map((option, i) => {
                return (
                  <button
                    // className='option-btn'
                    className={`option-btn ${clicked === i + 1 ? 'checked' : null
                      }`}
                    key={i}

                    onClick={() => setClicked(i + 1)}>
                    {option}

                  </button>


                )
              })}
            </div>
            <input type='button' value='next' id='next-btn' onClick={CQ} />
            </>

          ) }
              
        </div>
        
    </div>
  )
}

export default Quiz;