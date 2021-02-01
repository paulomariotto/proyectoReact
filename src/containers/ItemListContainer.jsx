//listado de productos
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Container, Row, Col} from 'react-bootstrap'

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <div>               
                <a href="#" className="greeting-tester"> {greeting} </a>
                <nav>
                    
                    <Container className="container-cards">
                        <Row md={4} className="row-cards">
                            <Col><Card className="img-card">
                                <Card.Img variant="top" src="/images/bebidas/andes-roja.webp" alt="" />
                                <Card.Body>
                                    <Card.Title>Andes Roja</Card.Title>
                                    <Card.Text>
                                                     Andes Origen Roja Cerveza 473ml
                                    </Card.Text>
                                    <Button variant="primary">Agregar al Carrito</Button>
                                </Card.Body>
                            </Card></Col>

                            <Col><Card className="img-card">
                                <Card.Img variant="top" src="/images/bebidas/andes-rubia.webp" alt="" />
                                <Card.Body>
                                    <Card.Title>Andes Rubia</Card.Title>
                                    <Card.Text>
                                                     Andes Origen Rubia Cerveza 473ml
                                    </Card.Text>
                                    <Button variant="primary">Agregar al Carrito</Button>
                                </Card.Body>
                            </Card></Col>

                            <Col><Card className="img-card">
                                <Card.Img variant="top" src="/images/bebidas/andes-ipa-andina.webp" alt="" />
                                <Card.Body>
                                    <Card.Title>Andes Ipa Andina</Card.Title>
                                    <Card.Text>
                                                         Andes Origen Ipa Andina Cerveza 473ml
                                    </Card.Text>
                                    <Button variant="primary">Agregar al Carrito</Button>
                                </Card.Body>
                            </Card></Col>
                        </Row>
                    </Container>

                </nav>
            </div>
        </>

    );
}
export default ItemListContainer;