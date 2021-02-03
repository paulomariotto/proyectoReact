import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/index.jsx';
import ImagenLogo from './components/header/index.jsx';
import ItemListContainer from './containers/ItemListContainer';
import CardProducto from './components/CardProducto.jsx';
import {Container, Row, Col} from 'react-bootstrap';




const App = ()  => {
  return (
    <>  
    <header>
    <ImagenLogo />
    <NavbarComponent />
    </header>
    <ItemListContainer greeting = {"Bienvenidos al Delivery mas Rapido de la Argentina!"}/>
    
    
    <div>
    <Container className="container-cards">
    <Row md={4} className="row-cards">
        <Col>
        <div>
          <CardProducto image=<img src="/images/bebidas/andes-roja.webp" alt="logo"/> nombre="Andes Roja" descripcion="cerveza" precio="$100" />
          
          </div>
        </Col> 
        <Col>
        <div>
          <CardProducto image=<img src="/images/bebidas/andes-rubia.webp" alt="logo" /> nombre="Andes Rubia" descripcion="cerveza" precio="$100" />
          </div>
        </Col> 
        <Col>
        <div>
          <CardProducto image=<img src="/images/bebidas/andes-ipa-andina.webp" alt="logo" /> nombre="Andes Ipa Andina" descripcion="cerveza" precio="$100" />
          </div>
          </Col>       
    </Row>
</Container>
     </div> 
   </>
  );
}

export default App;
