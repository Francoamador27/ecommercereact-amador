import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import './ItemListContainer.css'

function ItemListContainer() {
  const mockProductos = [ {
    
      id: 1,
      title: 'Remera',
      talle: 'XL',
      price: 3500,
      stock: 3
    },
    {
      id: 2,
      title: 'Pantalon',
      talle: 'M',
      price: 5500,
      stock: 5
    }]
const [products, setProducts] = useState([])

const getProductos= ()  => { 
 return new Promise ((resolve, reject) =>{

return resolve(mockProductos)
} )
}


useEffect( () =>{
  getProductos().then( (data) => {
    setProducts(data)
  } )
}, [] )







  return (
    <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={12} spacing={3} lg={12}>
       {console.log('productos: ', products )}

        </Grid>
        </Grid>
    
  );
}

export default ItemListContainer;
