import React from 'react'
import reactLogo from '../assets/react.svg'

const Logo = () => {
    return (
        <section className='flex justify-center items-center h-full'>
            <h1 className='font-semibold text-2xl text-white'>MYTINERARY</h1>
            <img className='h-6 mx-4' src={reactLogo} alt="react" />
        </section>

    )
}

export default Logo