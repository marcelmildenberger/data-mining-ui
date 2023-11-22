import React from 'react'
import CustomButton from './CustomButton'

function Question(props) {
  const {question, setAnswer, setCurrentQuestion} = props;
  return (
    <div className='flex flex-col items-center w-80 gap-6'>
      <div className='text-center text-lg font-bold'>{question.question}</div>
      <div className='flex flex-row gap-4'>
        <CustomButton text="Yes" onClick={() => {setAnswer(1); 
        setCurrentQuestion((prev) => prev + 1);
        return;
      }} />
        <CustomButton text="Abstain"  onClick={() => {setAnswer(0.5); 
        setCurrentQuestion((prev) => prev + 1);
        return;
      }}  />
      <CustomButton text="No"  onClick={() => {setAnswer(0); 
        setCurrentQuestion((prev) => prev + 1);
        return;
      }}  />
      </div>
    </div>
  )
}

export default Question