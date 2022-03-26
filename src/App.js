import styles from "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './componentes/carousel';
import Navmenu from './componentes/navmenu';
import Navbar from './componentes/nav';
import CardsMui from './componentes/CardsMui';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Count from "./componentes/Count/Count";
import Productos from "./componentes/Grid/Grid";
import Item from "./componentes/item";


function App() {
  return (
    <div className={styles.body}>
      <header >
     <Navbar/>
      </header>
        <section>       
         <Slider/>
</section>
<div>
<Navmenu/>

</div>
<ItemListContainer/>
<Item/>
    </div>
  );
}

export default App;
