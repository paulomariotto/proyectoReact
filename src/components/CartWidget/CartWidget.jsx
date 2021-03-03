import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {

    const {setCarrito, cart, totalProductos} = useContext(CartContext)

    return (
        <div>
        <img className="image-carrito" src="/images/cart-fill.svg" alt="carrito" 
        onClick={() => setCarrito(true)}/>{ cart.length !== 0 && <span className="text-dark">({totalProductos})</span>}
        
        </div>
    )
}
export default CartWidget;
