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
    <div className='row justify-content-center mt-5 flex-grow-1 p-10 w-full min-h-screen flex bg-center bg-cover flex-wrap gap-4'>
      {
        events.map(event => <CardEvent key={event._id} data={event} />)
      }
    </div>
  )
}

export default Events