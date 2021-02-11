import React from 'react'
import {Card, Button} from 'react-bootstrap'

import ItemDetail from '../ItemDetail'

import "./style.scss"

const Item = ({ product }) => {



    return (
        <div className="card-item">
        <Card>
        <img className="img-card" src={product.imagen} />

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>          
          <Card.Text>            
            <p>${product.precio}</p>
          </Card.Text>
          <Button variant="primary"><ItemDetail>Agregar al Carrito</ItemDetail></Button>
          
        </Card.Body>
      </Card>    
        </div>
    )
}

export default Item
