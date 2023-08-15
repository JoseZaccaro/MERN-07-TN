import React from 'react'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import Hero from '../layouts/Hero'

const Home = () => {
  return (
    <>
      <Hero>
        <div className='flex flex-col px-4 '>
          <h2 className='text-center w-full px-[10%] pb-4 text-2xl'>¡Bienvenido a Amazing Events! Tu destino para las entradas más emocionantes a eventos inolvidables. ¡Prepárate para vivir momentos únicos junto a nosotros!</h2>
          <Button />
        </div>
      </Hero>
      <Carousel />
    </>
  )
}

export default Home