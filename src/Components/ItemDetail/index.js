import React, {useState, } from "react";
import './ItemDetail.css'
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";



const ItemDetail = ({data}) => {


    const [goToCart, setGoToCart] = useState (false)


    const onAdd = (quantity) => {
        setGoToCart(true);
    }

    return (
        <div className="container">
            <div className="detalle">
            <img className="imagenStyle" src= {data.img} alt= ""></img>
            <div className="contenido">
                <h1 className="title">{data.title}</h1>
                <h2 className="informacion">{data.desc}</h2>
                <h3 className="precio">{data.precio}</h3>
                {
                    goToCart
                    ? <Link className="finalizar" to='/cart'>Finalizar compra</Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                }
            </div>
            </div>
        </div>
    )
}




export default ItemDetail