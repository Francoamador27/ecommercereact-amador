import { useContext } from "react";
import styles from "./nav.module.css";
import logo from "../logo/1.png";
import CustomizedMenus from "./perfil"
import CartWidget from "./CartWidget/CartWidget";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import cartContext from "../context/Cardcontext";
function Navbar() {

  const {handleClick} = useContext(cartContext)
  return (
  <nav>
<div className={styles.contenedor}>
    <div className={styles.logo}>
    <Link to={'/'}>
    <img className={styles.imglogo}
      src={logo}
/></Link>
  </div>
  <div  className={styles.enlacess}> 
  <input type="search" placeholder='¿Que estas buscando?' className={styles.search}></input>
    <a className={styles.enlacesnav} href=""><Link to='/'> Mi cuenta </Link></a>
    <a className={styles.enlacesnav} href=""><CartWidget/></a>
    <Button onClick={handleClick} variant="outlined" ><strong> Sign in</strong> </Button>
  </div>
  </div>
  </nav>
  );
}

export default Navbar;