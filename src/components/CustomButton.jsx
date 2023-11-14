import React from 'react'

//color: primary/s

function CustomButton(props) {
    const {text, onClick} = props;
  return (
    <div onClick={onClick} className='py-3 px-8 bg-[#f75204] text-white rounded-xl text-md cursor-pointer ease-in-out duration-150 hover:bg-[#fda880]'>
        {text}
    </div>
  )
}

export default CustomButton