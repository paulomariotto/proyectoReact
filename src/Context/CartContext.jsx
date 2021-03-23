import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
  
    const [cart, setCart] = useState([])
    const [carrito, setCarrito] = useState(false)

    const totalProductos = cart.reduce ((prev,cur) => prev + cur.quantity, 0)

    const [productoAtual, setProductoAtual] = useState()

    const productoExiste = cart.find(e => e.id === productoAtual) ? true : false

    const addItem = (namecategoriaId, id, name, precio, imagen, descripcion, stock, quantity, ) => {
        (productoExiste === false) ? 
        setCart([...cart, {namecategoriaId:namecategoriaId, id:id, name:name, precio:precio,  imagen:imagen, descripcion:descripcion, stock:stock, quantity:quantity}])
        :
        cart.forEach( prod => {
            if (prod.id === productoAtual){
                prod.quantity = prod.quantity + quantity
            }
        })
    }

    const removerProducto = (id) =>{
        setCart(cart.filter(prod => prod.id !== id))
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
