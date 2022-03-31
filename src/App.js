import styles from "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './componentes/carousel';
import Navmenu from './componentes/navmenu';
import Navbar from './componentes/nav';
import CardsMui from './componentes/CardsMui';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Count from "./componentes/Count/Count";
import Productos from "./componentes/Grid/Grid";
import ItemDetailsContainer from "./componentes/ItemDetailsContainer";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/home";


function App() {
  return (
    <BrowserRouter>
     <Navbar/>     
<Navmenu/>
<Routes>
<Route  path="/"  element={<Home/>} />
<Route  path="/Productos/:id"  element={<ItemDetailsContainer/>} />


</Routes>

    </BrowserRouter>
  );
}

export default App;
