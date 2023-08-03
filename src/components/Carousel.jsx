import React, { useState } from 'react'
import Arrow from './Arrow'

const images = [
  'https://images.pexels.com/photos/1327373/pexels-photo-1327373.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1600',
  // 'https://i.postimg.cc/kXWrBjXC/collectivities-party.jpg',
  // 'https://i.postimg.cc/XvQQr5C4/metallica-concert.jpg'
]
// index++ = [
// index = index + 1  ||
// index += 1
// ]
const Carousel = () => {

  const [index, setIndex] = useState(0)

  const next = () => {
    if (index < images.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }

  }
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(images.length - 1)
    }
  }

  const setBullet = (indice) => {
    setIndex(indice)
  }


  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <Arrow src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt='flecha-i' fn={prev} />
      <div className='bg-slate-500 w-[40vw] h-[35vh] p-2 rounded-md m-4'>
        <div className='flex gap-1 items-center h-full justify-center px-4'>
          <img className='w-3/4' src={images[index]} alt="" />
          {/* <img className='w-1/2' src={images[index]} alt="" /> */}
          {/* <img className='w-1/2' src="https://img.freepik.com/vector-premium/estilo-arte-papel-fondo-banner-paisaje-paisaje-bosque-naturaleza-verde_228338-530.jpg" alt="" /> */}
        </div>
        <div className='flex w-full justify-center mt-4'>
          {
            images.map((item, indexMap) => {
              if (indexMap === index) return <span key={indexMap} className='cursor-pointer'>⚫</span>
              else return <span key={indexMap} className='cursor-pointer' onClick={() => setBullet(indexMap)}>⚪</span> // bind
            })
          }
        </div>
      </div>
      <Arrow src="https://cdn-icons-png.flaticon.com/512/109/109617.png" alt='flecha-d' fn={next} />

      {/* <h1 className='text-8xl'>{index + 1}</h1> */}
    </div>
  )
}

export default Carousel