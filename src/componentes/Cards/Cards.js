import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Cards.css';



function Cards({data}) {
  const{id, title, descripcion, talle, price, stock, image} = data

  const onAdd = (count) => {
    const total = count * price;
    alert(`Agregaste el producto ${title} cantidad ${count}  Total a abonar: $${total}`);
  };

  return (

    <div className='cards' >
  <h3>{title} </h3>
  <p>stock: {stock}</p>
  <p>talle: {talle} </p>
  <p>{descripcion} </p> 
  <p>{price} </p>
  <ItemCount stock={stock} initial={1} onAdd={onAdd} />

  
    </div>
  );
}

export default Cards;