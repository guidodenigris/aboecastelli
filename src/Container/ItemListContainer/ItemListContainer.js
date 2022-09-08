import React from 'react'


const ItemListContainer = ({greeting}) =>{
    return (
        <>
            <h1 style={estilos.titulo}>{greeting}</h1>
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