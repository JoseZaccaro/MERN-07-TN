import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardEvent from './../components/CardEvent';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getEventsAsync } from '../redux/actions/eventsActions';


const Events = () => {
  // const params = useParams()
  // console.log(params)
  // const [events, setEvents] = useState([])
  const dispatch = useDispatch()
  const { loading, events } = useSelector(store => store.eventsReducer)
  useEffect(() => {
    if (events.length === 0) {
      dispatch(getEventsAsync())
    }
  }, [])

  if (loading) {
    return <h1 className='text-6xl text-white'> Loading ...</h1>
  }

  return (
    <div className='row justify-content-center mt-5 flex-grow-1 p-10 w-full min-h-screen flex bg-center bg-cover flex-wrap gap-4'>
      <div className='w-full flex justify-center'>
        <input type="text" className='w-96 p-2 outline-none caret-red-500 bg-transparent text-white border-b-white border-b' placeholder='Event name...' />
      </div>
      {
        events.map(event => <CardEvent key={event._id} data={event} />)
      }
    </div>
  )
}

export default Events