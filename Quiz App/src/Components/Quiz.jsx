import './Quiz.css'
import { useState } from 'react'
import { questions } from '../assets/assets'

const Quiz = () => {
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false)

    function handleAnswerCheck(item) {

        if (item.correct) {
            setScore(s => s + 1)

        }
        
        if(questions.length > count + 1){
            setCount(s => s + 1)
        }else{
            setResult(true)

        }
        
        
        
    }
    function handleReset(){
        setResult(false)
        setCount(0)
        setScore(0)
    }
    return (
        <div>
            {result ? (
                <div className='result' >

                <div className="result">
                Your Score {score} out of {questions.length}
                </div>
                <button onClick={handleReset} >Reset</button>
            </div>)
            :
            (<div className='QnA-container'>
                <div className='question-range' >Questions {count + 1}/{questions.length}</div>
                <div className='Q' >{count + 1}. {questions[count].question}</div>
                <div >
                    {questions[count].answer.map((item, idx) =>
                    (<span
                        className='Ans'
                        ref={(el) => { item.element = el }}
                        key={idx}
                        onClick={() => handleAnswerCheck(item)} >    {item.text}
                    </span>))}
                </div>
            </div>)}




        </div>
    )
}

export default Quiz
