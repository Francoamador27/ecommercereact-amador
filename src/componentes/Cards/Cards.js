import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Cards.css';



function Cards({titulo, descripcion, price, imagen,stock}) {
  const onAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  };
  return (
    
    <div className='cards' >
        <img src={imagen} />
  <h3>{titulo} </h3>
  <p>stock: {stock}</p>
  <p>{descripcion} </p> 
  <p>{price} </p>
  <ItemCount stock={stock} initial={1} onAdd={onAdd} />

  
    </div>
  );
}

export default Cards;
