import React, { useEffect, useState } from 'react'

const noche = new Date()
noche.setHours(19)
noche.setMinutes(30)
const dia = new Date()
dia.setHours(7)
dia.setMinutes(30)
const Clock = () => {
    const [hour, setHour] = useState(new Date())
    const [day, setDay] = useState(true)

    useEffect(() => {

        // console.log('Me monté')
        
        let intervalID = setInterval(() => {
            const date = new Date()
            // date.setHours(7)
            // date.setMinutes(30)
            setHour(date)
        }, 1000)

        return () => {
            console.log('Me desmonté')
            console.log('last time: ' + hour)
            clearInterval(intervalID)
        }
        
    }, [])

    useEffect(() => {
        // console.log('Me actualicé')
        // console.log(hour)


        // 19:31 a 23:59
        // 00:00 a 07:29:59
        if (hour > noche || hour < dia) {
            setDay(false)
        } else {
            setDay(true)
        }

    }, [hour])

    // useEffect(() => {
    //     return () => {
    //         console.log('Me desmonté')
    //         console.log('last time: ' + hour)
    //         clearInterval()
    //     }
    // }, [])

    // const handleDayChange = () => {
    // setDay(!day)
    // }



    if (day) {
        return (
            <div className='min-w-40 h-40 flex items-center justify-center '>
                ☀️ <h1 className='text-white text-xl'>{hour.toLocaleTimeString('es-ES')}</h1>
            </div>
        )
    }


    return (
        <div className='min-w-40 h-40 flex items-center justify-center ' >
            🌙 <h1 className='text-white text-xl'>{hour.toLocaleTimeString('es-ES')}</h1>
        </div>
    )
}

export default Clock