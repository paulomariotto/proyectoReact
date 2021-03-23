import { useContext } from "react";
import { CartContext } from "./../../Context/CartContext";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, ListGroup } from "react-bootstrap";


const Cart = () => {
  const { cart, setCart, setCarrito, removerProducto } = useContext(CartContext);

  const totalFinal = cart.reduce((prev, cur) => {
    return prev + (cur.quantity*cur.precio)
  }, 0);
  console.log(totalFinal);
  console.log(cart);
 

  return (
  cart.length === 0 ?(
    <div>
      <Container>
        <h2>Su carrito</h2>
        <Row>
          <Col>
            <Button className="close" onClick={() => setCarrito(false)}></Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h5 className="text-center">Su carrito esta vacio</h5>
          </Col>
          <Link to="/">
            <Button variant="primary" onClick={() => setCarrito(false)}>
              Volver al Home
            </Button>
          </Link>
        </Row>
      </Container>
    </div>
  ):(
    <div>
      <Container>
        <h2>Su carrito</h2>
        <Row>
          <Col>
            <Button
              type="button"
              className="close"
              onClick={() => setCarrito(false)}
            ></Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <h5 className="text-center">Los productos en su carrito son:</h5>
        {cart.map((prod, index) => {
          return (
            <Row key={index}>
              <Col>
              <img src={prod.imagen} alt="" />
              </Col>

              <Col>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                  Nombre:{prod.name}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Precio Unitario:$ {prod.precio}
                  </ListGroup.Item>
                  <ListGroup.Item>Cantidad:{prod.quantity}</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col>
                <div>
                  <span className="font-italic">
                    Subtotal: $ {prod.quantity * prod.precio}{" "}
                  </span>
                </div>
              </Col>
              <Col>
                <div>
                  <Button className="close" onClick={() => {removerProducto(prod.id)}}>
                    X
                  </Button>
                </div>
              </Col>       
             </Row>          
        )})}
        <Row>
          <h4>Total: ${totalFinal}</h4>
        </Row>
        <Row>
          <Button variant="primary" onClick={() => setCart([])}>
            Vaciar Carrito
          </Button>
          <Link to={'/Checkout'}>
          <Button variant="primary">Ir a Checkout</Button>
          </Link>
        </Row>
      </Container>
    </div>
  )
  )
};
export default Cart;
