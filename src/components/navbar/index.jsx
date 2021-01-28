import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


function NavbarComponent() {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
           
            <NavDropdown title="SHOP" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cervezas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Vinos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Aperitivos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gaseosas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Snacks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
            </NavDropdown> 
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#pricing">Mi Cuenta</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Quien Somos</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Carrito
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </>
    );
}
export default NavbarComponent;
