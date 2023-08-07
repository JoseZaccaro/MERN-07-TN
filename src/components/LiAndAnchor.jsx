import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const LiAndAnchor = (props) => {

    const { value, content, active } = props

    return (
        <li>
            {/* <Link className='text-xl text-gray-500 hover:text-white transition-all duration-500' style={active ? { color: 'white' } : {}} to={value}>{content}</Link> */}
            <NavLink className={({ isActive }) =>
                isActive
                    ? "text-xl text-white transition-all duration-500"
                    : "text-xl text-gray-500 hover:text-white transition-all duration-500"
            } to={value}>{content}</NavLink>
        </li>
    )
}

export default LiAndAnchor