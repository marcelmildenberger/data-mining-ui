import React from 'react'

//color: primary/s

function CustomButton(props) {
    const {text, onClick, selected} = props;
  return (
    <div onClick={onClick} className={`py-1 px-4 sm:py-2 sm:px-6 hover:bg-[#f75204] text-white rounded-xl text-md cursor-pointer ease-in-out duration-150  shadow-xl ${selected ? 'bg-[#f75204]' : 'bg-[#fda880]'}`}>
        {text}
    </div>
  )
}

export default CustomButton