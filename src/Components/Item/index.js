import React from 'react'
import './item.css'


const Item = ({info}) => {
    return (
        <a className='productos'>
            <img src={info.img} alt='' />
            <h1>{info.title}</h1>
            <h3>{info.desc}</h3>
            <h4>{info.precio}</h4>
            
        </a>
    )
}

export default Item 