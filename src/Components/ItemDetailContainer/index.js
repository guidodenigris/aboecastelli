import React, {useState, useEffect} from "react";
import ItemDetail from '../ItemDetail'


const products = {id: 3, title: "Taza Stitch", desc: "Taza de el personaje Stitch impresa en 3D, pintada con acrílico a mano y con un acabado transparente para una máxima protección. Dentro contiene un polímero resistente a altas temperaturas e incluye bombilla.", precio: '$1400', img: "https://scontent.faep24-1.fna.fbcdn.net/v/t39.30808-6/279005869_281056357565453_3714423571177077346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEeCzvs1wVTPiiIJm5mDql4PYkpKZg4ZNk9iSkpmDhk2f9sBY7_vdnyA79TDdUJYR3OTJFGhVVN9wRlCwdkXJdE&_nc_ohc=PtDG1ieZIz8AX8Qqd8V&_nc_ht=scontent.faep24-1.fna&oh=00_AT83QSCK85IMCY07Qscd53mviAHMFJrYuSW57lxEE1KNKg&oe=6325AE6D"}


const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    
    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout (() =>{
                resolve (products);
            }, 2000);
        });
        getData.then (res => setData(res));

    }, [])



    return (
        <ItemDetail data={data}/>
    )
}


export default ItemDetailContainer