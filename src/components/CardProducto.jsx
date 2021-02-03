import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button} from 'react-bootstrap'
import ItemCount from '../containers/ItemCount';



const CardProducto = ({image, nombre, descripcion, precio}) => {
           
        return (
            <>
           
                <Card className="img-card">
                
                {image}
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>{descripcion}</Card.Text>
                        <Card.Text>{precio}</Card.Text> 
                        
                        <Button variant="primary">Agregar al Carrito</Button>
                       <ItemCount/>
                    </Card.Body>
                </Card>
               
            </>
          );
        };

export default CardProducto;

