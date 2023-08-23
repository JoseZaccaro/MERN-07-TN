import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { server } from '../utils/axios'

const Event = () => {
    const { id } = useParams()
    const [event, setEvent] = useState({})
    useEffect(() => {
        server.get('/events/' + id)
            .then(res => setEvent(res.data.response))
            .catch(err => console.log(err))
    }, [])

    return (
        <main className="row justify-content-center gap-3 flex-grow-1 max-h-[80vh] mt-8 min-w-[80vw]">
            <div className="card border-secondary px-2 py-3 mx-3 d-flex col-11 flex-row flex-wrap">
                <img className="card-img-top w-full lg:w-1/2 object-cover" src={event.image} alt="Title" />
                <div className="card-body d-flex flex-column w-full lg:w-1/2 gap-y-4">
                    <h4 className="card-title font-bold">{event.name}</h4>
                    <p className="card-text">{event.description}</p>
                    <p className="card-text">Category : {event.category}</p>
                    <p className="card-text">Date : {new Date(event.date).toLocaleDateString()}</p>
                    <p className="card-text">Capacity : {event.capacity}</p>
                    <p className="card-text">assistance : {event.assistance}</p>
                    <p className="card-text">Price : {event.price}</p>
                </div>
            </div>
        </main>
    )
}

export default Event