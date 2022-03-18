import Cards from "../Cards/Cards";
import './ItemListContainer.css'

function ItemListContainer() {
  return (
    <div className="list">
     <Cards  titulo='Bici' descripcion='Rodado 29' price='500' stock={10}  />
     <Cards  titulo='Auto' descripcion='Gol' price='2500' stock={20} />
     <Cards  titulo='Zapatilla' descripcion='Rodado 29' price='4500'stock={30} />
     <Cards  titulo='Remera' descripcion='Roja' price='5500' stock={40} />
     <Cards  titulo='Pantalon' descripcion='Marron' price='6500'stock={50} />

    </div>
  );
}

export default ItemListContainer;
