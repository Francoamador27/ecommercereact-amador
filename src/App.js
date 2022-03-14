import logo from './logo.svg';
import styles from "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './componentes/nav';
import Slider from './componentes/carousel';
import Navmenu from './componentes/navmenu';
import PrimarySearchAppBar from './componentes/navmenu';
import Navbar from './componentes/nav';


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
    </div>
  );
}

export default App;
