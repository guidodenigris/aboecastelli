import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'
import { CartContext } from '../../Context/CartContext'

const Item = ({ info }) => {
    return (
        <Link to={`/detalle/${info.id}`} className='productos'>
            <img src={info.img} alt=''/>
            <h1>{info.title}</h1>
            <h3>{info.desc}</h3>
            <h4>{info.precio}</h4>
        </Link>
    )
}

export default Item 