import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <>
        <div>
            {products.map((product) => {
                return  (               
                <Item key={product.id} product={product} imagen={product.imagen} /> )   
            })}
           </div>
        </>
    )
}

export default ItemList
