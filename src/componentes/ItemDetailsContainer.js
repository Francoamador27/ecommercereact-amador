import { useState, useEffect } from "react";
import ItemDetail from "./Item/ItemDetail";
import { mockProductos } from "./mockProductos";

function ItemDetailsContainer() {
 
const [item, setItem] = useState([])

async function getItem(){
    let promise = new Promise ((resolve, reject)=> {
        setTimeout(()=> {
            resolve(mockProductos)}, 2000 );
    } )
    let result = await promise;
    return(result)
}


useEffect( () =>{
  getItem()
  .then( resp => resp.find(el => el.id ===2))
  .then( data => setItem(data));
},[])

  







  return (
    
        <div className="item">
            <h2>Producto Seleccionado </h2>
            <ItemDetail item={item} />

        </div>
    
  );
}

export default ItemDetailsContainer;
