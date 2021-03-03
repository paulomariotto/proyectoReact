import React,{ useState, useContext, useEffect } from "react";
import { Card, Container, Row, Col,Button } from "react-bootstrap";
import ItemCount from "../ItemCont/ItemCont";
import { Link } from "react-router-dom";
import "./ItemDetail.scss";
import {CartContext} from '../../Context/CartContext'


const ItemDetail = ({ item }) => {

  const{ setProductoAtual, addItem, setCarrito} = useContext(CartContext)
  
  const [irCart, setIrCart] = useState(false);
  

  const onAdd = (contador) => {
    console.log(`Ud selecciono   productos al carrito`);
     
    addItem( item.id, item.categoriaId, item.precio, item.imagen, item.name, item.stock, contador, item.descripcion )
    setIrCart(true);  
  };
    useEffect( () => {
        
        setProductoAtual(item.id);    
      }, [setProductoAtual, item.id])

  return (
    <>
      <Container className="container"> 
        <Card.Title className="card-detail">
          <h1>{item.categoriaId}</h1>
        </Card.Title>
        <Row className="row">
          <Col sm={4} className="col-img">
            <img className="img-card-detail" src={item.imagen} alt="" />
          </Col>

          <Col sm={8} className="col-card">
            <Card className="card-body-detail">
              <Card.Title classeName="name-detail">
                <h3>{item.name}</h3>
              </Card.Title>
              <Card.Text classeName="stock-detail">
                {item.stock} Unds.
              </Card.Text>
              <Card.Text classeName="descripcion-detail">
                <strong>Descripcion = {item.descripcion}</strong>
              </Card.Text>
              <br />
              <br />
              <br />
              <br />
              <br />
              <Card.Text classeName="precio-detail">
                <h5>Precio $ {item.precio} c/u</h5>
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
                <ItemCount item={item} onAdd={onAdd} />
               
              }
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
