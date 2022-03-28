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
  getItem().then( (dataitem) => {
    setItem(dataitem)
  } ).finally(() => {
      console.log("Final de la llamada")
  })
}, [] )







  return (
    
        <div className="item">
            <h2>Producto Seleccionado </h2>
            <ItemDetail item={item} />

        </div>
    
  );
}

export default ItemDetailsContainer;
