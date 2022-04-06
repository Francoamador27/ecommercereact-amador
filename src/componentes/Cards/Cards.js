import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './Cards.css';



function Cards({data}) {
const navigate = useNavigate();
  const{id, title, descripcion, talle, price, stock, image} = data

  const onAdd = (count) => {
    const total = count * price;
    alert(`Agregaste el producto ${title} cantidad ${count}  Total a abonar: $${total}`);
  };
  const changePage = () => {
navigate(`/Productos/${id}`)
  }
const addToCart = (e) => {
  e.stopPropagation()
  console.log("Agrego al carrito")
}
  return (
    <div className='cards' onClick={changePage} >
  <img className='imgcard' src={`./${image}`} alt={image} />
  <h3>{title} </h3>
  <p className='pricecard'>${price} </p>
  <button className='cart' onClick={addToCart} ><ItemCount   stock={stock} initial={1} onAdd={onAdd} />
</button>

  
    </div>
  );
}

export default Cards;