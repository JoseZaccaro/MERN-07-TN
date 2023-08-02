import React from 'react'

const Hero = ({ children }) => {

    return (
        <main className='w-full h-[50vh] bg-pink-400 flex items-center justify-center flex-1'>
            <div className='w-1/2 bg-pink-600 h-1/2 border rounded-lg border-white '>
                {/* <h1 className='text-white font-medium p-4'>Soy el contenido que le paso a MainContainer</h1>
                <p className='text-gray-400 font-thin p-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, error vitae! Quidem dignissimos accusamus, soluta alias esse recusandae voluptatum culpa porro sed reprehenderit nihil facere ullam rem, blanditiis excepturi. Quia.</p> */}
                <img className='w-full object-contain h-40' src="https://png.pngtree.com/thumb_back/fw800/back_pic/04/29/94/9458401a0ca2e51.jpg" alt="asdasd" />
                <div className='border-t border-t-black p-4 flex items-center justify-center flex-1'>
                    {
                        children
                    }
                </div>
            </div>

        </main>
    )
}

export default Hero