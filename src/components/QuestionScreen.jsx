import React, { useEffect, useState } from 'react'
import Question from './Question';
import Result from './Result';

const mockData = [{id: 1, question: "Yes or No?"}, {id: 2, question: "Yes or Yes?"}, {id: 3, question: "No or No?"}]

function QuestionScreen() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  // eslint-disable-next-line
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [result, setResult] = useState(null);


  useEffect(() => {
    //fetch questions on render
    setQuestions(mockData)
  },[])

  // eslint-disable-next-line
  const fetchQuestions = async () => {return null;}

  // eslint-disable-next-line
  const fetchResult = async () => {
    setResult(null)
    return null;}

    console.log(answers)

  return (
    <div className='m-20'>
      {!started ? <div onClick={() => setStarted(true)} className='py-2 text-center w-60 bg-[#f75204] text-white rounded-xl text-lg cursor-pointer ease-in-out duration-150 hover:bg-[#fda880]'>
        Get started
    </div> : <div>
      {currentQuestion < questions.length ? <Question question={questions[currentQuestion]} setCurrentQuestion={setCurrentQuestion} setAnswer={(answer) => setAnswers((prev) => [...prev, {id: questions[currentQuestion].id, question: questions[currentQuestion].question, answer:answer}])}/> : <Result result={result} /> }
    </div> }
    </div>
  )
}

export default QuestionScreen7