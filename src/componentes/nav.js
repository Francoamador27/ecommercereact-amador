import styles from "./nav.module.css";
import logo from "../logo/1.png";
import CustomizedMenus from "./perfil"
import CartWidget from "./CartWidget/CartWidget";
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
  <input type="search" placeholder='¿Que estas buscando?' className={styles.search}></input>
    <a className={styles.enlacesnav} href="">Mi cuenta</a>
    <a className={styles.enlacesnav} href=""><CartWidget/></a>
  </div>
  </div>
  </nav>
  );
}

export default Navbar;