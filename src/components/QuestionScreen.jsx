import React, { useEffect, useState } from 'react'
import Question from './Question';
import Result from './Result';

const mockData = [{id: 1, question: "Yes or No?"}, {id: 2, question: "Yes or Yes?"}, {id: 3, question: "No or No?"}, {id: 1, question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}]

function QuestionScreen() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  // eslint-disable-next-line
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1)
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



  return (
    <div className='mt-10 pb-40'>
      {!started ? <div onClick={() => setStarted(true)} className='py-2 text-center w-60 bg-[#f75204] text-white rounded-xl text-lg cursor-pointer ease-in-out duration-150 hover:bg-[#fda880]'>
        Get started
    </div> : <div className='flex flex-col gap-10 items-center'>
      {questions.map((item,index) => index < currentQuestion ? <Question key={index} questionsLength={questions.length} index={index} question={item} setCurrentQuestion={setCurrentQuestion} setAnswer={(answer) => setAnswers((prev) => [...prev, {id: item.id, question: item.question, answer:answer}])} /> : null)}
      {questions.length === currentQuestion - 1 ? <div onClick={() => fetchResult()} className='py-2 text-center w-60 sm:w-80 bg-[#f75204] text-white rounded-xl text-lg cursor-pointer ease-in-out duration-150 hover:bg-[#fda880]'>Get Result!</div> : null}
    </div> }
    </div>
  )
}

export default QuestionScreen