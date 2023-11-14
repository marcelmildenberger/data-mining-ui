import React from 'react'

// #f75204
// #f9be1e

function Header() {
  return (
    <div className='mt-6 w-full flex flex-col items-center'>
        <img alt='logo' src='/img/logo.png' className='w-80 cursor-pointer' onClick={() => window.location.reload()}/>
        <div className='w-full border-b-2 border-[#f9be1e]'/>
    </div>
  )
}

export default Header