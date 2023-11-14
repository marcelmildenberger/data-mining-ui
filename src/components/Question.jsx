import React from 'react'
import CustomButton from './CustomButton'

function Question(props) {
  const {question, setAnswer, setCurrentQuestion} = props;
  return (
    <div className='flex flex-col items-center w-80 gap-6'>
      <div className='text-center text-lg font-bold'>{question.question}</div>
      <div className='flex flex-row gap-4'>
        <CustomButton text="Yes" onClick={() => {setAnswer(true); 
        setCurrentQuestion((prev) => prev + 1);
        return;
      }} />
        <CustomButton text="No"  onClick={() => {setAnswer(false); 
        setCurrentQuestion((prev) => prev + 1);
        return;
      }}  />
      </div>
    </div>
  )
}

export default Question