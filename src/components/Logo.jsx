import React from 'react'
// import LogoAE from '../assets/.svg'

const Logo = () => {
    return (
        <section className='flex justify-center items-center h-full gap-2 flex-row-reverse'>
            {/* <h1 className='font-semibold text-md text-white uppercase'>Amazing events</h1> */}
            <img className='max-h-full py-1 cursor-pointer' src={'/Logo.png'} alt="react" />
        </section>

    )
}

export default Logo