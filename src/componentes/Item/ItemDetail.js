import { Description } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Cards from "../Cards/Cards";
import { mockProductos } from "../mockProductos";
import './Itema.css';
import {useParams} from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = () => {
 const {id, category} = useParams()
 const [product, setProduct] = useState({})
 const [click, setClick] = useState(true);

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

const onAdd = (count) => {
  const total = count * product.price;
  if (count > 0 ){
    setClick(!click)
    alert(`Agregaste el producto ${product.title} cantidad ${count}  Total a abonar: $${total}`);

  }
  
  console.log('click esta',click)
  
};


  return (
    
    <div className="itemdetail">
   <h1 className="titleitemdetail">{product.title} </h1>
    <div className="contentitem" >
        <img className="imagendetail" src={`../${product.image} `}  />
   <div> 
     <div className="tallestock">
    <p>Tamaño de pantalla: {product.talle} </p>
    <p>Stock disponible:  {product.stock} </p>
    </div>
    <div className="">
    <p className="precioitem">${product.price} <span className="price">  </span></p>

   { click ? (
 <div className="itemcount">    <ItemCount   stock={product.stock} initial={1} onAdd={onAdd} /> </div>  
   ): (
     <div className="checkout">
       <p className="pcheck"> Ir al Check Out </p>
    <Link to={'/Checkout'}> <Button>CkeckOut</Button></Link></div>
   )}

</div>
    </div>
    </div>
    <div className="d-flex justify-content-evenly">

    </div>
    <h2 className="hdescripcion container"> Descripcion   </h2>
    <p className="descripcion">{product.descripcion} </p>

    </div>
    
  );
}

export default ItemDetail;