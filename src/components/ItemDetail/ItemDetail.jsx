import React,{ useState, useContext, useEffect } from "react";
import { Card, Container, Row, Col,Button } from "react-bootstrap";
import ItemCount from "../ItemCont/ItemCont";
import { Link } from "react-router-dom";
import "./ItemDetail.scss";
import {CartContext} from '../../Context/CartContext'


const ItemDetail = ({prod}) => {

  const{ setProductoAtual, addItem, setCarrito} = useContext(CartContext)
  
  const [irCart, setIrCart] = useState(false); 

  const onAdd = (contador) => {
    console.log(`Ud selecciono  ${contador} ${prod.name} productos al carrito`);
     
    addItem(prod.id, prod.categoriaId, prod.namecategoriaId, prod.name, prod.precio, prod.imagen, prod.stock, contador, prod.descripcion ) 
      
    setIrCart(true);  
 }; 
 useEffect( () => {
  setProductoAtual(prod.id)
}, [setProductoAtual, prod.id])

  return (
    <>
      <Container className="container"> 
        <Card.Title className="card-detail">
          <h1>{prod.namecategoriaId}</h1>
        </Card.Title>
        <Row className="row">
          <Col sm={4} className="col-img">
            <img className="img-card-detail" src={prod.imagen} alt="" />
          </Col>

          <Col sm={8} className="col-card">
            <Card className="card-body-detail">
              <Card.Title classeName="name-detail">
                <h3>{prod.name}</h3>
              </Card.Title>
              <Card.Text classeName="stock-detail">
                {prod.stock} Unds.
              </Card.Text>
              <Card.Text classeName="descripcion-detail">
              
                <strong>Descripcion = {prod.descripcion}</strong>
              </Card.Text>
              <br />
              <br />
              <br />
              <br />
              <br />
              <Card.Text classeName="precio-detail">
                <h5>Precio $ {prod.precio} c/u</h5>
              </Card.Text>
              {irCart ?               
                  
                  <div>
                  <Button><Link className="seguir-detail" to="/">
                      Seguir Comprando
                    </Link></Button>
                    <br /> 
                    <br />                
                  <Button variant="primary" onClick={() => setCarrito(true)}><Link className="seguir-detail" to="/Cart">Ir a Carrito</Link></Button>
                </div>
                
               : 
                <ItemCount prod={prod} onAdd={onAdd} />
               
              }
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
