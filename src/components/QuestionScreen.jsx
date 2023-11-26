import React, { useEffect, useState } from 'react'
import Question from './Question';
import Result from './Result';
import { getQuestions, postResult } from '../api/calls';
const parties = ["AFD", "CDU/CSU", "FDP", "GRÜNE", "LINKE", "SPD"]

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
    const response = await getQuestions();
    setQuestions(response.data)
    return;
  }

  const fetchResult = async () => {
    const sortedAnswers = answers.sort((a,b) => a.id - b.id)
    const response = await postResult(sortedAnswers);
    const formattedResponse = response.data.prediction.map((perc,index) => {return {id: index, partyName: parties[index], percentage: perc}})
    const sortedResult = formattedResponse.sort((a,b) => b.percentage - a.percentage)
    setResult(sortedResult)
    return;
  }

  return (
    <div className='mt-10 pb-40'>
      {!started ? <div onClick={() => setStarted(true)} className='py-2 text-center w-60 bg-[#f75204] text-white rounded-xl text-lg cursor-pointer ease-in-out duration-150 hover:bg-[#fda880]'>
        Get started
    </div> : <div className='flex flex-col gap-10 items-center'>
      {questions.map((item,index) => index < currentQuestion ? <Question key={index} questionsLength={questions.length} index={index} question={item} setCurrentQuestion={setCurrentQuestion} setAnswer={(answer) => setAnswers((prev) => prev?.filter((val) => val?.id === item.id).length === 0 ? [...prev, {id: item.id, question: item.question, answer:answer}] : [...prev.filter(val => val?.id !== item.id), {id: item.id, question: item.question, answer:answer} ])} /> : null)}
      {questions.length === currentQuestion - 1 ? <div onClick={() => fetchResult()} className='py-2 text-center w-60 sm:w-80 bg-[#f75204] text-white rounded-xl text-lg cursor-pointer ease-in-out duration-150 hover:bg-[#fda880]'>{!result ? "Get result!" : "Update result!"}</div> : null}
    </div> }
    {result ? <Result result={result} /> : null}
    </div>
  )
}

export default QuestionScreen