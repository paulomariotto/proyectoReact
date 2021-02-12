import React from 'react'
import {Card, Button} from 'react-bootstrap'



import "./style.scss"

const Item = ({ product }) => {
  


    return (
        <div className="card-item">
        <Card>
        <img className="img-card" src={product.imagen} />
        <Button variant="primary">Ver Producto</Button>
        <Card.Body>
        
          <Card.Title>{product.name}</Card.Title>          
          <Card.Text>            
            <p>${product.precio}</p>
          </Card.Text>
          <Button variant="primary">Agregar al Carrito</Button>
          
        </Card.Body>
      </Card>    
        </div>
    )
}

export default Item
