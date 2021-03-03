import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="#home">
          <img
            className="image-logo"
            src="/images/urge-delivery-logo.png"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to={"/"}>
            <h4>URGE Delivery</h4>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto nav-style">
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to={"/Shop/Aperitivos"}>Aperitivos</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/Shop/Cerveza"}>Cerveza</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/Shop/Destilados"}>Destilados</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/Shop/Espumantes"}>Espumantes</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/Shop/sinAlcool"}>Sin Alcool</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/Shop/Vinos"}>Vinos</Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link>
              <Link to={"/Combos"}>Combos</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/Promociones"}>Promociones</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/Marcas"}>Marcas</Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
         <Link to={"/Cart"}><CartWidget /></Link>
      </Navbar>
    </>
  );
};
export default NavbarComponent;
