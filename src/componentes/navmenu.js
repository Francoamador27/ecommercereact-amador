import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown, Offcanvas, FormControl, Form, Button, Dropdown} from 'react-bootstrap';
import styles from "./navmenu.module.css";

function Navmenu() {
  return (
    <section >
<Navbar className={styles.bgmenu} expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className={styles.margin}>
      <NavDropdown title="Todos los productos" id="basic-nav-dropdown" className={styles.margin}>
          <NavDropdown.Item  href="#action/3.1"><span className={styles.texto} >Notebook </span></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">PC</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Monitores</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#home">Notebooks</Nav.Link>
        <Nav.Link href="#link">Computadoras de escritorio</Nav.Link>
        <Nav.Link href="#link">Monitores</Nav.Link>
        <Nav.Link href="#link">Impresoras</Nav.Link>

     
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</section>
  );
}

export default Navmenu;