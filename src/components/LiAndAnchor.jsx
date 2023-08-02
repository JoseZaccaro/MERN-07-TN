import React from 'react'

const LiAndAnchor = (props) => {
    
    const {value, content} = props

    return (
        <li>
            <a className='text-white bg-[rgba(255,255,255,0.2)] rounded-lg p-1 border-white border hover:bg-[rgba(255,255,255,0.6)] transition-all duration-500' href={value}>{content}</a>
        </li>
    )
}

export default LiAndAnchor