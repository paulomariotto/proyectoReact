import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../Firebase"

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({});  
    const [loading,setLoading] = useState(false);
    const {ID} = useParams();

    useEffect(() => {  
        setLoading(true);  
        const dataBase = getFirestore();
        const productList = dataBase.collection("Shop")     
        
        const loadProductList = new Promise ((resolve, reject) => {
        
            resolve(productList.get().then((value) => {
                let aux = value.docs.map(e => {
                return {...e.data(), id: e.id} 
               
             })
             return aux.sort((a,b) => {if (a.name < b.name){return -1}; if (a.name > b.name){return 1}; return 0})
            }))
        })

        loadProductList.then((database) => {
        const selectedProduct = database.find((e) => e.id === ID)
        setProd(selectedProduct)
        setLoading(false)
    })

      }, [ID]);
  
  return (
    <>
    {loading}
    <h2>Detalle del Producto</h2>    
    <ItemDetail prod={prod} />               
  </>
)
}

export default ItemDetailContainer;
