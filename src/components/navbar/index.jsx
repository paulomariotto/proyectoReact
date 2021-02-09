import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import CartWidget from '../CartWidget';





const NavbarComponent = () => {
    return (
        <>
        <Navbar bg="light" expand="md">
          <Navbar.Brand href="#home"><img className="image-logo" src="/images/urge-delivery-logo.png" alt="logo" /></Navbar.Brand>
          <Navbar.Brand href="#home"><h4> URGE Delivery</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto nav-style">
                <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Cervezas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Vinos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Espumantes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Destilados</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Aperitivos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sin Alcool</NavDropdown.Item>
                
                <NavDropdown.Divider />
                </NavDropdown>
              <Nav.Link href="#link">Combos</Nav.Link>
              <Nav.Link href="#link">Promociones</Nav.Link>
              <Nav.Link href="#link">Marcas</Nav.Link>              
            </Nav>
              <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          <CartWidget />
        </Navbar>      
        </>
    )
}
export default NavbarComponent;