import { Center, Flex } from '@chakra-ui/react';
import { addDoc, getFirestore } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart'
import './Cart.css'

const Cart = () => {

    const {cart, totalPrice} = useCartContext()

    // Orden de compra

        const order = {
            buyer: {
                name: 'Guido',
                email: 'guido.dn59@gmail.com',
                phone: '2245319821',
                adress: 'Castelli'

            },
            items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
            total: totalPrice (),

        }


    const handleClick = () => {

        const db = getFirestore ();
        const ordersCollection = collection{db, 'orders'};
        addDoc{ordersCollection, order}
        .then (({id}) => console.log(id));


    }


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
            <button onClick={handleClick}>Generar compra</button>

        </>
    )
}





export default Cart