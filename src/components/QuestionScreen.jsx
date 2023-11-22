import React, { useEffect, useState } from 'react'
import Question from './Question';
import Result from './Result';
import { getQuestions } from '../api/calls';

function QuestionScreen() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchQuestions();
  },[])

  const fetchQuestions = async () => {
    const response = getQuestions();
    setQuestions(response.data)
    return;
  }

  const postResult = async () => {
    const sortedAnswers = answers.sort((a,b) => a.id - b.id)
    const response = postResult(sortedAnswers);
    const sortedResult = response.data.sort((a,b) => b.percentage - a.percentage)
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