import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import { mockProductos } from "../mockProductos";
function ItemDetail({item} ) {
 
const{title,price,descripcion,talle} = item;



console.log('console desde ItemDetail',item)
console.log()
  return (
    
    <div>
   <h1>{title}</h1>
    <div className="d-flex" >
        <div>IMAGEN</div>
   <div> 
    <h2> Descripcion  </h2>
    <p>{mockProductos[0].descripcion}</p>
    </div>
    </div>
    <div className="d-flex justify-content-evenly">
<p>Precios {mockProductos[0].price} </p>
    <p>Talle: {mockProductos[0].talle}</p>
    </div>
    </div>
    
  );
}

export default ItemDetail;