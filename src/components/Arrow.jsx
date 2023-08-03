import React from 'react'

const Arrow = ({ src, alt, fn }) => {
  return (
    <div className='p-4 rounded-full bg-white cursor-pointer' onClick={fn}>
      <img className='w-8' src={src} alt={alt} />
    </div>
  )
}

export default Arrow