import React from 'react'

const LiAndAnchor = (props) => {

    const { value, content, active } = props

    return (
        <li>
            <a className='text-xl text-gray-500 hover:text-white transition-all duration-500' style={active ? { color: 'white' } : {}} href={value}>{content}</a>
        </li>
    )
}

export default LiAndAnchor