import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../Context/CartContext';


const CartWidget = () =>{

const {totalProducts} = useCartContext()

    return (
        <>
            <ShoppingCartIcon style={carrito.carro} sx={{ fontSize: 50 }}/> 
            <span style={carrito.cantidad}>{totalProducts() || ''}</span>
        </>
    )
}

const carrito = {
    carro:{ 
        color: 'whitesmoke'
    },
    cantidad:{
        color: 'whitesmoke',
        paddingRight: 120,
        paddingBottom: 10,
        fontSize: 20
    }
    

}

export default CartWidget