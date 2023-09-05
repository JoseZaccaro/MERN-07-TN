import React, { useState } from 'react'
import Nav from './Nav.jsx'
import Logo from './Logo.jsx'
import Clock from './Clock.jsx'

// import './Header.css'
// Header.css .mi-ul

const links = [
    { value: '/', content: 'Home', id: '1', active: true },
    { value: '/events', content: 'Events', id: '2', active: false },
    { value: '/signup', content: 'Sign up', id: '3', active: false },
    { value: '/signin', content: 'Sign in', id: '4', active: false },
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