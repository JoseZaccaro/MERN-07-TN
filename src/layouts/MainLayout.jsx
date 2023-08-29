import React, { useEffect } from 'react'
import Header from './../components/Header.jsx';
import Nav from './../components/Nav.jsx';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

// import './mainLayout.css'

// mainLayout.css .mi-ul

const links = [
    { value: '#', content: 'Link 1', id: '1' },
    { value: '#', content: 'Link 2', id: '2' },
    { value: '#', content: 'Link 3', id: '3' },
    { value: '#', content: 'Link 4', id: '4' },
]

const MainLayout = () => {
    // const navigate = useNavigate()
    // const location = useLocation()
    // console.log(location);
    // useEffect(() => {
    //     if (location.pathname === '/') navigate('/home')
    // }, [])

    return (
        <div className='w-full min-h-screen flex flex-col items-center bg-[#212529]'>
            <Header />

            <Outlet />
            {/* <footer>
                <Nav links={links} />
            </footer> */}
        </div>
    )
}

export default MainLayout