import React, {useState, useEffect} from 'react'
import { ItemCount } from '../../Components/ItemCount'
import ItemList from '../../Components/ItemList'


const products = [
    {id: 1, title: "Mate Hogwarts", desc:"Mate Hogwarts en 3D", precio: '$1500', img: "https://scontent.faep24-1.fna.fbcdn.net/v/t39.30808-6/284505163_307956128208809_4716793440706063216_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEjLrCUqXe-2peXv4T5Tb7x0sa60Sk7oDDSxrrRKTugMFtox266rHECLzBFq3tj5GG7pZU9PBm_YkTr_1MEE2aH&_nc_ohc=8qO8bg3bPZAAX-wfGDZ&_nc_ht=scontent.faep24-1.fna&oh=00_AT9ZYXplxoiaOc2HgN21-9r4AmD-CIRyAMZxBW-ADmxUcg&oe=6325AAF5"},
    {id: 2, title: "Mate Baby Yoda", desc:"Mate Baby Yoda en 3D" ,precio: '$1000', img: "https://scontent.faep24-1.fna.fbcdn.net/v/t39.30808-6/291582631_328092076195214_1814878815747828424_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEWqK3q7sVAzrvwKsB2umBXOFGy7hUUgbQ4UbLuFRSBtG2dLL-FX6N4sdl62kYUH69I_nPy0F-0STvT-zLg69lg&_nc_ohc=uV5r23YWM08AX89gbFz&_nc_ht=scontent.faep24-1.fna&oh=00_AT9X-nVs1LEdPRgVyMcMNgJpSEtnKPM1Blp4ujm4kp3NiQ&oe=6324FDB7"},
    {id: 3, title: "Taza Stitch", desc: "Taza Stitch en 3D", precio: '$1400', img: "https://scontent.faep24-1.fna.fbcdn.net/v/t39.30808-6/279005869_281056357565453_3714423571177077346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEeCzvs1wVTPiiIJm5mDql4PYkpKZg4ZNk9iSkpmDhk2f9sBY7_vdnyA79TDdUJYR3OTJFGhVVN9wRlCwdkXJdE&_nc_ohc=PtDG1ieZIz8AX8Qqd8V&_nc_ht=scontent.faep24-1.fna&oh=00_AT83QSCK85IMCY07Qscd53mviAHMFJrYuSW57lxEE1KNKg&oe=6325AE6D"},
    {id: 4, title: "Taza Angel", desc:"Taza Angel en 3D", precio: '$1300', img: "https://scontent.faep24-1.fna.fbcdn.net/v/t39.30808-6/295703840_344830064531692_5372316008702717984_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGBN6G7VMJdNCXl5bhOaegkui2hzVtzNWe6LaHNW3M1Z6R-t9HrfRVYAKCx5ib4xlR59Py6xAHC6-ZCMYJlpw2-&_nc_ohc=ZLPiNeSJWpYAX_5chay&_nc_ht=scontent.faep24-1.fna&oh=00_AT-nXYzco6lmXhS4cF2-g_cbme04fG08o6ftxcyXu6_I9A&oe=6325F3D2"}
]





const ItemListContainer = ({greeting}) =>{

    const [data, setData] = useState ([]);

    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout (() =>{
                resolve (products);
            }, 2000);
        });
        getData.then (res => setData(res));

    }, [])

    const onAdd = (quantity) => {
        console.log(`Has hecho una compra de ${quantity} artículos`);
    }

    return (
        <>
            <h1 style={estilos.titulo}>{greeting}</h1>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
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