import { mockProductos } from "./mockProductos";
function Item() {
  console.log('itemjs',mockProductos)

    return (
        <div>
      <p>Titulo{mockProductos.title} </p>
      <p> Descripcion</p>
      <p>Precios</p>
      </div>
    )
  }
  
  export default Item;