import React, { useState } from 'react'
import Nav from './Nav.jsx'
import Logo from './Logo.jsx'
import Clock from './Clock.jsx'

// import './Header.css'
// Header.css .mi-ul

const links = [
    { value: '#', content: 'Link 1', id: '1', active: true },
    { value: '#', content: 'Link 2', id: '2', active: false },
    { value: '#', content: 'Link 3', id: '3', active: false },
    { value: '#', content: 'Link 4', id: '4', active: false },
]

const Header = () => {

    const [show, setShow] = useState(false)
    return (
        <header className='flex h-[5vh] items-center px-16 justify-between  w-3/4'>
            <Logo />
            <Nav links={links} />
            {/* <p onClick={() => setShow(!show)}>Show time</p> */}
            {
                // show && <Clock />
            }
            <Clock />

        </header>
    )
}

export default Header