import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <>
        <div>
            {products.map((product) => {
                return  (               
                <Item key={product.id} 
                product={product} 
                imagen={product.imagen} 
                categoriaID={product.categoriaID} 
                descripcion={product.descripcion} 
                name={product.name}
                stock={product.stock}/> )   
            })}
           </div>
        </>
    )
}

export default ItemList
