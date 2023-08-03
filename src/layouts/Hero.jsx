import React from 'react'

const Hero = ({ children }) => {

    return (
        <main className='w-full md:w-3/4 min-h-[70vh] flex items-center justify-center flex-1 mt-20'>
            <div className='w-11/12 xl:w-3/4 h-full bg-pink-600 border rounded-lg border-white flex flex-col items-center overflow-hidden'>
                {/* <h1 className='text-white font-medium p-4'>Soy el contenido que le paso a MainContainer</h1>
                <p className='text-gray-400 font-thin p-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, error vitae! Quidem dignissimos accusamus, soluta alias esse recusandae voluptatum culpa porro sed reprehenderit nihil facere ullam rem, blanditiis excepturi. Quia.</p> */}
                <img className='w-full h-96 object-cover' src="https://png.pngtree.com/thumb_back/fw800/back_pic/04/29/94/9458401a0ca2e51.jpg" alt="asdasd" />
                <div className='border-t border-t-black py-8 flex items-center justify-center flex-1 w-full'>
                    {
                        children
                    }
                </div>
            </div>

        </main>
    )
}

export default Hero