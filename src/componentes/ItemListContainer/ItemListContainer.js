import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import './ItemListContainer.css'

function ItemListContainer() {
  const mockProductos = [ {
    
      id: 1,
      title: 'Remera',
      descripcion: 'Dsfesadsas',
      talle: 'XL',
      price: 3500,
      image: 'bici.jpg',
      stock: 3
    },
    {
    
      id: 1,
      title: 'Remera',
      descripcion: 'Dsfesadsas',
      talle: 'XL',
      price: 3500,
      image: 'bici.jpg',
      stock: 3
    },
    {
      id: 2,
      title: 'Pantalon',
      descripcion: 'Dsfesadsas',
      talle: 'M',
      price: 5500,
      image: 'bici.jpg',
      stock: 5
    }]
const [products, setProducts] = useState([])

const getProductos= ()  =>  new Promise ((resolve, reject) =>{
return setTimeout ( () => { 
  resolve(mockProductos);
},3000 );
});


useEffect( () =>{
  getProductos().then( (data) => {
    setProducts(data)
  } )
}, [] )







  return (
    
        <div className="list">
{products.map( (product) => {
const{id, title, descripcion, talle, price, stock} = product

  return(
  
<Cards data={product} key={id} />
  ) 
} )}
     </div>
    
  );
}

export default ItemListContainer;
