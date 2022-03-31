import { Description } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Cards from "../Cards/Cards";
import { mockProductos } from "../mockProductos";
import './Itema.css';
import {useParams} from 'react-router-dom'

const ItemDetail = () => {
 const {id, category} = useParams()
 const [product, setProduct] = useState({})

useEffect( () => {
  filterProductById(mockProductos, id )

},[])

const filterProductById = (array, id) => {
  return array.map( (product)=> {
if(product.id == id){
  return setProduct(product) 
}
  } )
}
console.log(product)



  return (
    
    <div className="itemdetail">
   <h1 className="titleitemdetail">{product.title} </h1>
    <div className="contentitem" >
        <img className="imagendetail" src={`../${product.title} `}  />
   <div> 
    <p>Talle: {product.talle} </p>
    <p>Stock:  {product.stock} </p>
    <Button>Añadir al Carrito</Button>


    </div>
    </div>
    <div className="d-flex justify-content-evenly">
<p className="precioitem">Precio {product.price} <span className="price"> $ </span></p>
    </div>
    <h2 className="hdescripcion"> Descripcion  {product.descripcion} </h2>
    <p className="descripcion"> </p>

    </div>
    
  );
}

export default ItemDetail;