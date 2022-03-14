import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./nav.module.css";
import logo from "../logo/1.png";
import CustomizedMenus from "./perfil"
function Navbar() {
  return (
  <nav>
<div className={styles.contenedor}>
    <div className={styles.logo}>
    <img className={styles.imglogo}
      src={logo}
/>
  </div>
  <div  className={styles.enlacess}> 
    <a className={styles.enlacesnav} href="">Mi cuenta</a>
    <a className={styles.enlacesnav} href=""><ShoppingCartIcon/></a>
  </div>
  </div>
  </nav>
  );
}

export default Navbar;