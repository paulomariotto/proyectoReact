import React from 'react'
import  { useState } from 'react'
import {Card} from 'react-bootstrap'
import ItemCount from '../ItemCont/index'

const ItemDetail = ({item}) => {
  const [irCart, setIrCart] = useState(false);

    const onAdd = (contador) => {
        console.log("Ud selecciono ", contador);
        setIrCart(true)
      };

    return (
              <>

        <div className="card-item">     
        <Card>
        <img className="img-card" src={item.imagen} alt=""/>
        
        
        <Card.Body>
          <Card.Title>{item.id}</Card.Title> 
          <Card.Title>{item.name}</Card.Title>  
          <Card.Text>Descripcion = {item.descripcion}</Card.Text> 
          <Card.Text>Stock = {item.stock}</Card.Text>         
          <Card.Text>            
            <p>${item.precio}</p>
          </Card.Text>
         {irCart ? <button>Ir a Carrito</button> : <ItemCount onAdd={onAdd} />}
          
        </Card.Body>
      </Card>   
        
       
        </div>
        </>
    )
}

export default ItemDetail;
