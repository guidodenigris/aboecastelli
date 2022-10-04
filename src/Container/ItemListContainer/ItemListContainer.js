import React, {useState, useEffect} from 'react'
import  ItemCount  from '../../Components/ItemCount'
import ItemList from '../../Components/ItemList'
import { useParams } from 'react-router-dom'


const products = [
    {id: 1, title: "Mate Hogwarts", desc:"Mate Hogwarts en 3D", price: '$1500', category: 'impresion3d', img: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/284505163_307956128208809_4716793440706063216_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=FgOs2gfgEIkAX8CQC5O&_nc_ht=scontent-eze1-1.xx&oh=00_AT9KRCgEEQUCCWxa2Am4JeA4r1B4HcUnV6IyszRMjOFZlg&oe=63397175"},
    {id: 2, title: "Mate Baby Yoda", desc:"Mate Baby Yoda en 3D" , price: '$1000', category: 'impresion3d', img: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/291582631_328092076195214_1814878815747828424_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=I07P1jGCERoAX9ZbOC9&_nc_ht=scontent-eze1-1.xx&oh=00_AT-pA3-Kc8gGolKze960r2l1otHNmrGE6xr_adzA6xL3AQ&oe=6338C437"},
    {id: 3, title: "Apoya Taza", desc: "Apoya taza con base de madera y algodón", price: '$1000', category: 'decoracion', img: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/278411039_273365695001186_6625329676222616794_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=GeWqPCuvlm4AX_sBUPN&_nc_ht=scontent-eze1-1.xx&oh=00_AT9bVz_VV5lyvjPlqfa25JetE6mxHvoZAalo5bWFVUPRYw&oe=6335A941"},
    {id: 4, title: "Espejo Macramé", desc:"Espejo de 40cm de diámetro total", price: '$2400', category: 'decoracion', img: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/240395970_130357795968644_5901731249074385976_n.jpg?stp=dst-jpg_p480x480&_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=d-tEc6ir98IAX9GzI0B&tn=7TTOms7GUQk0o0HB&_nc_ht=scontent-eze1-1.xx&oh=00_AT-rd0RFc56mCNXdt997C_vIHAV79Ouz4b6Zx46SNsWUHQ&oe=63351207"}
]





const ItemListContainer = ({greeting}) =>{

    const [data, setData] = useState ([]);


    const { categoriaId } = useParams ();


    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout (() =>{
                resolve (products);
            }, 1000);
        });
        if (categoriaId){
            getData.then (res => setData(res.filter(product => product.category === categoriaId)));
        }else{
            getData.then (res => setData(res));
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