import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ItemCount from '../ItemCont'
import "./style.scss"

const Item = ({product}) => {
    return (
        <div className="card-item">
        <Card><p>Stock = {product.stock}</p>
        <img className="img-card" src={product.imagen} />

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          
          <Card.Text>
            {product.descripcion}
            <p>${product.precio}</p>
          </Card.Text>
          <Button variant="primary">Agregar al Carrito</Button>
          
        </Card.Body>
      </Card>
      
        </div>
    )
}

export default Item
