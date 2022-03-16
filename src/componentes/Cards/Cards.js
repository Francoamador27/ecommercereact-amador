import './Cards.css';


function Cards({titulo, descripcion, price}) {
  return (
    <div className='cards' >
  <h3>{titulo} </h3>
  <p>{descripcion} </p> 
  <p>{price} </p>
  <button>Comprar</button>
    </div>
  );
}

export default Cards;
