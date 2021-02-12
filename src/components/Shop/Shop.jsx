import React from 'react'
import productosList from '../productos/productosList'

import{Card, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Shop = () => { 
   
    const {categoriaId} = useParams();
    const [productosItem, setProductosItem] = useState([categoriaId]);
    

   useEffect(() => {
      let todosProductos = productosList.map( (categoria) =>{
        return categoria.categoriaId === categoriaId

      });     
                      
       setProductosItem(todosProductos);    
            
    }, [categoriaId])  

    return (
      <>
      <div>     
        
             {productosList.map((producto) => {
     return (
            <div>
            <h2>{producto.categoriaId}</h2>
            <Card>
            <img className="img-card" src={producto.imagen} />
            <Button variant="primary">Ver Producto</Button>
            <Card.Body>
            
              <Card.Title>{producto.name}</Card.Title>          
              <Card.Text>            
                <p>${producto.precio}</p>
              </Card.Text>
              <Button variant="primary">Agregar al Carrito</Button>
              
            </Card.Body>
          </Card>    
            </div>
     )        
       } 
        )  
    }
        
        
     </div>
       </> 
    )   
}


export default Shop
