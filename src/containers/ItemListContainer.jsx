import React,  { useState } from 'react';
import  ItemCount  from '../components/ItemCont';
import productosList from '../components/productos/productosList.jsx'
import ItemList from '../components/ItemList/ItemList.jsx'
// import { Link } from 'react-router-dom'

const ItemListContainer = (props) => {

    const [contador, setContador] = useState(1)
    
    const onAdd = (stock) => {
        if(contador < stock){
            setContador(contador + 1)
        }else{
            alert ("No hay stock")
        }        
    }

    const onSubstract = (stock) => {
        if (contador > 1) {
            setContador(contador - 1)            
        } else {
            alert("El Valor es menor a lo que podemos vender")
            
        }

    }
        const [products, setProducts] = React.useState([])

        React.useEffect(() => {
          const myPromise = new Promise((resolve, reject) => {
            setTimeout (() => resolve(productosList), 3000)

        })

        myPromise.then((result) => setProducts(result))
    
        }, [])
        

    return (
        <>
                     
                <h2 className="greeting-tester"> {props.greeting} </h2>
              
             <ItemList products={products} />
           <ItemCount stock={10} contador={contador} onAdd={onAdd}
           onSubstract={onSubstract}/> 
          
        </>

    );
}
export default ItemListContainer