import React from 'react'
import { ItemCount } from '../../Components/ItemCount'

const ItemListContainer = ({greeting}) =>{

    const onAdd = (quantity) => {
        console.log(`Has hecho una compra de ${quantity} artículos`);
    }

    return (
        <>
            <h1 style={estilos.titulo}>{greeting}</h1>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </>
    )
}


const estilos = {
    titulo:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}


export default ItemListContainer