import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () =>{
    return (
        <>
            <ShoppingCartIcon style={carrito.carro} sx={{ fontSize: 50 }}/> 
        </>
    )
}

const carrito = {
    carro:{

        paddingRight: 120,
        color: 'whitesmoke'
    }

}

export default CartWidget