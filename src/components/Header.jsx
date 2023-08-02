import React from 'react'
import Nav from './Nav.jsx'
import Logo from './Logo.jsx'

// import './Header.css'
// Header.css .mi-ul

const links = [
    { value: '#', content: 'Link 1', id: '1' },
    { value: '#', content: 'Link 2', id: '2' },
    { value: '#', content: 'Link 3', id: '3' },
    { value: '#', content: 'Link 4', id: '4' },
]

const Header = () => {
    return (
        <header className='flex h-[15vh] items-center px-4 justify-between bg-blue-900'>
            <Logo />
            <Nav links={links} />
        </header>
    )
}

export default Header