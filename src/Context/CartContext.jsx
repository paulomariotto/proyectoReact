import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
  
    const [cart, setCart] = useState([])
    const [carrito, setCarrito] = useState(false)

    const totalProductos = cart.reduce ((prev,cur) => prev + cur.quantity, 0)

    const [productoAtual, setProductoAtual] = useState ()

    const productoExiste = cart.find (e => e.id === productoAtual) ? true : false

    const addItem = (id, categoriaId, precio, imagen, descripcion, stock, quantity) => {
        (productoExiste ===false) ? 
        setCart([...cart,{id: id, categoriaId: categoriaId, precio: precio, descripcion: descripcion, imagen: imagen, stock: stock, quantity: quantity}])
        :
        cart.forEach( item => {
            if (item.id === productoAtual){
                item.quantity = item.quantity + quantity
            }
        })
    }

    const removerProducto = (id) =>{
        setCart(cart.filter(product => product.id !== id))
    }

    return (
         <>
         <CartContext.Provider value={{
              cart,
              setCart,
              productoAtual,
              setProductoAtual,
              productoExiste,
              addItem,
              removerProducto,
              carrito,
              setCarrito,
              totalProductos              
         }}>
              { children }
         </CartContext.Provider>
    </>
    )

}
export default CartProvider;
