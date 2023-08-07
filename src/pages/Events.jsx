import React from 'react'
import { useParams } from 'react-router-dom'


const Events = () => {
  const params = useParams()
  console.log(params)
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[url("https://t4.ftcdn.net/jpg/03/08/41/21/360_F_308412175_yrqkHPciFF3Px259sqGx5qID4hrueUmT.jpg")] bg-center'>
      
    </div>
  )
}

export default Events