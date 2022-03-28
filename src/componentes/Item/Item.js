import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import { mockProductos } from "../mockProductos";
function Item() {
 
const [products, setProducts] = useState([])

const getProductos= ()  =>  new Promise ((resolve, reject) =>{
return setTimeout ( () => { 
  resolve(mockProductos);
}, );
});
getProductos().then( (data) => {
    setProducts(data)
  } )








  return (
    
    <div>
  
    </div>
    
  );
}

export default Item;