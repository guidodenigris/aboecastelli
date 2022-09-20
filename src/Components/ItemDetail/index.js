import React from "react";
import './ItemDetail.css'

const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detalle">
            <img className="imagenStyle" src= {data.img} alt= ""></img>
            <div className="contenido">
                <h1 className="title">{data.title}</h1>
                <h2 className="informacion">{data.desc}</h2>
                <h3 className="precio">{data.precio}</h3>
            </div>
            </div>
        </div>
    )
}




export default ItemDetail