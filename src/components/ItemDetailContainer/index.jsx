import React from 'react'
import productosList from '../productos/productosList'
import ItemDetail from '../ItemDetail'



const ItemListDetail = (product) => {
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
      const myPromise = new Promise((resolve, reject) => {
        setTimeout (() => resolve(productosList), 5000)

    })

    myPromise.then((result) => setProducts(result))

    }, [])


    return (
        <div>
            <div>
            {products.filter((product) => {
                return  (               
                <ItemDetail key={product.id} categoria={product.categoriaID} product={product} imagen={product.imagen} descripcion={product.descripcion}/> )   
            })}
           </div>
        </div>
    )
}

export default ItemListDetail
