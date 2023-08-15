import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardEvent from './../components/CardEvent';
import axios from 'axios';


const Events = () => {
  const params = useParams()
  console.log(params)
  const [events, setEvents] = useState([])
  useEffect(() => {
    axios('http://localhost:3000/api/events')
      .then(res => setEvents(res.data.response))

  }, [])

  return (
    <div className='p-10 w-full h-screen flex justify-start items-center bg-[url("https://t4.ftcdn.net/jpg/03/08/41/21/360_F_308412175_yrqkHPciFF3Px259sqGx5qID4hrueUmT.jpg")] bg-center bg-cover flex-wrap gap-4'>
      {
        events.map(event => <CardEvent key={event._id} data={event} />)
      }
    </div>
  )
}

export default Events