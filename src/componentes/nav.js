import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container} from 'react-bootstrap';
import styles from "./nav.module.css";

function Nav() {
  return (
    <section className={styles.nav}>
    <Navbar   >
  <Container >
    <Navbar.Brand href="#home"><h1 className={styles.title} >Smarts Tienda Tecno</h1></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <div className={styles.enlacesnav}>
           <div className={styles.enlace}>
           <a href=''>Perfil</a>
           </div>
              <div className={styles.enlace} >
              <a href=''>Home</a>
             </div>
        </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
</section>
  );
}

export default Nav;