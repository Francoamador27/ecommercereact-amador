import { Description } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Cards from "../Cards/Cards";
import { mockProductos } from "../mockProductos";
import './Itema.css';

function ItemDetail({item} ) {
 
const{title,price,descripcion,talle, image, stock} = item;



console.log('console desde ItemDetail',item)
console.log()
  return (
    
    <div className="itemdetail">
   <h1 className="titleitemdetail">{title}</h1>
    <div className="contentitem" >
        <img className="imagendetail" src={`./${image}`} />
   <div> 
    <p>Talle: {talle} </p>
    <p>Stock: {stock} </p>
    <Button>Añadir al Carrito</Button>


    </div>
    </div>
    <div className="d-flex justify-content-evenly">
<p className="precioitem">Precio <span className="price"> ${price} </span></p>
    </div>
    <h2 className="hdescripcion"> Descripcion  </h2>
    <p className="descripcion"> {descripcion}</p>

    </div>
    
  );
}

export default ItemDetail;