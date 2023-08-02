import React, { Fragment } from 'react'
import LiAndAnchor from './LiAndAnchor';

const Nav = ({ links }) => {

    return (
        <nav>
            <ul className='flex gap-4'>
                {
                    links.map((link, indice) => {
                        return (
                            <Fragment key={indice}>
                                <LiAndAnchor value={link.value} content={link.content} />
                            </Fragment>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav