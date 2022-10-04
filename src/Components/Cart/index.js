import { Center, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart'
import './Cart.css'

    const Cart = () => {

    const {cart, totalPrice} = useCartContext()

    if (cart.length === 0){
        return (
                <>
                    <p className='cart'>El carrito se encuentra vacío</p>
                    <Link to='/' className='link'>Ir a comprar</Link>
                </>
        )
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <h3>
                Total: {totalPrice()}
            </h3>

        </>
    )
}




export default Cart