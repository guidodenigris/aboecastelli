import React, {useState, useEffect} from 'react'
import ItemList from '../../Components/ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'







const ItemListContainer = ({greeting}) =>{

    const [data, setData] = useState ([]);


    const { categoriaId } = useParams ();


    useEffect (() => {
        const querydb = getFirestore ()
        const queryCollection = collection(querydb, 'products')
        
        
        if (categoriaId){
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData (res.docs.map(product => ({id: res.id, ...product.data()}))))
        }else{
            getDocs(queryCollection)
                .then(res => setData (res.docs.map(product => ({id: res.id, ...product.data()}))))
        } 

    }, [categoriaId])



    return (
        <>
            <h1 style={estilos.titulo}>{greeting}</h1>
            <ItemList data={data}/>
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