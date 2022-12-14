import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import './ItemCart.css'


const ItemCart = ({product}) => {

    const {removeProduct} = useCartContext ()

    return (
        <div className='cartItem'>
            <img src={product.img} alt= {product.title} />
            <div>
                <h1>{product.title}</h1>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.price}</p>
                <p>Subtotal: {product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}


export default ItemCart