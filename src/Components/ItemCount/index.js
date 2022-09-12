import React from "react" 
import { useState } from 'react'
import { HStack, Text, Button } from "@chakra-ui/react"


const ItemCount = ({ initial, stock, onAdd}) => {

    const [count, setCount] = useState (initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount (count - 1)


    return (
        
        <HStack style={contador.alinear}>
            <Button disabled={count === initial} onClick={decrease}>-</Button>
            <Text>{count}</Text>
            <Button disabled={count === stock}onClick={increase}>+</Button>
            <Button onClick={() => onAdd (count)}>Agregar al carrito</Button>
        </HStack>
        
    )
}

const contador ={
    alinear:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { ItemCount }