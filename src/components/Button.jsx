import React from 'react'
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    // <div className='flex flex-1 items-center justify-center mt-10'>
        <Link to={'/events'} className='mx-auto text-center hover:translate-y-3 w-1/2 h-24 flex items-center justify-center transition-all duration-500 hover:scale-110 font-bold text-4xl border-2 border-gray-400 hover:border-black bg-white hover:bg-transparent hover:text-purple-500 rounded-xl'>Ver todos los eventos</Link>
    // </div>
  )
}

export default Button