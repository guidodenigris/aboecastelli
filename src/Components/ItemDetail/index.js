import React from "react";
import './ItemDetail.css'

const ItemDetail = ({info}) => {
    return (
        <div className="container">
            <div className="detalle">
            <img className="imagenStyle" src= {info.img} alt= ""></img>
            <div className="contenido">
                <h1 className="title">{info.title}</h1>
                <h2 className="informacion">{info.desc}</h2>
                <h3 className="precio">{info.precio}</h3>
            </div>
            </div>
        </div>
    )
}




export default ItemDetail