import React, { useEffect, useState } from 'react'
import Question from './Question';
import Result from './Result';

const mockResult = [{id:1, partyName: "FDP", percentage: 0.2},{id:2, partyName: "SPD", percentage: 0.3}, {id:3, partyName: "Bündnis90", percentage: 0.5}, {id:4, partyName: "CDU&CSU", percentage: 0.1}]
const mockData = [{id: 1, question: "Yes or No?"}, {id: 2, question: "Yes or Yes?"}, {id: 3, question: "No or No?"}, {id: 1, question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}]

function QuestionScreen() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  // eslint-disable-next-line
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [result, setResult] = useState(null);


  useEffect(() => {
    fetchQuestions();
  },[])

  
  const fetchQuestions = async () => {
    setQuestions(mockData)
    return;
  }

  const postResult = async () => {
    // eslint-disable-next-line
    const sortedAnswers = answers.sort((a,b) => a.id - b.id)
    const sortedResult = mockResult.sort((a,b) => b.percentage - a.percentage)
    setResult(sortedResult)
    return;
  }



  return (
    <div className='mt-10 pb-40'>
      {!started ? <div onClick={() => setStarted(true)} className='py-2 text-center w-60 bg-[#f75204] text-white rounded-xl text-lg cursor-pointer ease-in-out duration-150 hover:bg-[#fda880]'>
        Get started
    </div> : <div className='flex flex-col gap-10 items-center'>
      {questions.map((item,index) => index < currentQuestion ? <Question key={index} questionsLength={questions.length} index={index} question={item} setCurrentQuestion={setCurrentQuestion} setAnswer={(answer) => setAnswers((prev) => prev?.filter((val) => val?.id === item.id).length === 0 ? [...prev, {id: item.id, question: item.question, answer:answer}] : [...prev.filter(val => val?.id !== item.id), {id: item.id, question: item.question, answer:answer} ])} /> : null)}
      {questions.length === currentQuestion - 1 ? <div onClick={() => postResult()} className='py-2 text-center w-60 sm:w-80 bg-[#f75204] text-white rounded-xl text-lg cursor-pointer ease-in-out duration-150 hover:bg-[#fda880]'>{!result ? "Get result!" : "Update result!"}</div> : null}
    </div> }
    {result ? <Result result={result} /> : null}
    </div>
  )
}

export default QuestionScreen