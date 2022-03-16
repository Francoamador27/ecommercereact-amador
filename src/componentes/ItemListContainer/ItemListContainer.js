import Cards from "../Cards/Cards";
import './ItemListContainer.css'

function ItemListContainer() {
  return (
    <div className="list">
     <Cards  titulo='Bici' descripcion='Rodado 29' price='500' />
     <Cards  titulo='Auto' descripcion='Gol' price='2500' />
     <Cards  titulo='Zapatilla' descripcion='Rodado 29' price='4500' />
     <Cards  titulo='Remera' descripcion='Roja' price='5500' />
     <Cards  titulo='Pantalon' descripcion='Marron' price='6500' />

    </div>
  );
}

export default ItemListContainer;
