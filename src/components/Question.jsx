import React, { useEffect, useState } from 'react'
import CustomButton from './CustomButton'

function Question(props) {
  const {question, setAnswer, setCurrentQuestion, index} = props;
  const [selectedAnswer, setSelctedAnswer] = useState(null)

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  },[])
  return (
    <div className='flex flex-col items-center w-[300px] sm:w-[500px] md:w-[650px] border-2 p-4 shadow-lg border-gray-200'>
      <div className='flex flex-row gap-1 text-lg font-bold text-center'>{index+1}/9:<div>{question.title}</div></div>
      <div className='text-center text-md font-semibold mt-2 mb-4'>{question.question}</div>
      <div className='flex flex-row gap-2 sm:gap-4'>
        <CustomButton text="Yes" selected={selectedAnswer === 1} onClick={() => {setAnswer(1); 
        setCurrentQuestion((prev) => prev - 1 === index ? prev + 1 : prev);
        setSelctedAnswer(1)
        return;
      }} />
        <CustomButton text="Abstain" selected={selectedAnswer === 0.5}  onClick={() => {setAnswer(0.5); 
        setCurrentQuestion((prev) => prev - 1 === index ? prev + 1 : prev);
        setSelctedAnswer(0.5)
        return;
      }}  />
      <CustomButton text="No" selected={selectedAnswer === 0}  onClick={() => {setAnswer(0); 
        setCurrentQuestion((prev) => prev - 1 === index ? prev + 1 : prev);
        setSelctedAnswer(0);
        return;
      }}  />
      </div>
    </div>
  )
}

export default Question