import React from 'react'
import Arrow from './Arrow'

const Carousel = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <Arrow src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt='flecha-i'/>
        <div className='bg-slate-500 w-[40vw] h-[35vh] p-2 rounded-md m-4'>
            <div className='flex gap-1 items-center h-full justify-center'>
                <img className='w-1/2' src="https://img.freepik.com/vector-premium/estilo-arte-papel-fondo-banner-paisaje-paisaje-bosque-naturaleza-verde_228338-530.jpg" alt="" />
                <img className='w-1/2' src="https://img.freepik.com/vector-premium/estilo-arte-papel-fondo-banner-paisaje-paisaje-bosque-naturaleza-verde_228338-530.jpg" alt="" />
            </div>
        </div>
        <Arrow src="https://cdn-icons-png.flaticon.com/512/109/109617.png" alt='flecha-d'/>
    </div>
  )
}

export default Carousel