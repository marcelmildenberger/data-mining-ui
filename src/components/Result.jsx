import React from 'react'

function Result(props) {
  const {result} = props;
  return (
    <div className='mt-10 flex flex-col items-center'>
      <div className='font-bold text-4xl border-b-2 w-40 text-center mb-8'>Result</div>
      <div className='flex flex-col gap-2'>
      {result.map((item, index) => <div className={`text-center text-[${30-index*10}px] opacity-[${1-(index/100)*20}]`} key={index}>{item.percentage*100}% {item.partyName}</div>)}
      </div>
    </div>
  )
}

export default Result