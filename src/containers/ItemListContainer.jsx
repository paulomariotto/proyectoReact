import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList/ItemList.jsx";
import { getFirestore } from '../components/Firebase'
import {useParams} from 'react-router-dom'



const ItemListContainer = () => {

      const [prod,setProd] = useState([]);
      const [loading, setLoading ] = useState(false);
      const { categoriaID } = useParams()
  
  
      useEffect (()=>{
         
          const dataBase = getFirestore(); 
          setLoading(true);
          
          const productList = dataBase.collection("Shop");
          console.log(productList)
          
          const loadProductList = new Promise ((resolve, reject) => {
            resolve(productList.get().then((value) => {
              let aux = value.docs.map(e => {              
             
                 return {...e.data(), id: e.id}
              })
              return aux.sort((a,b) => {
                if (a.name < b.name){return -1};
                if (a.name > b.name)
                {return 3};
                return 0}) 
              }))
            })          

          loadProductList.then((dataBase) => {
            const filterProductList = dataBase.filter((e) => e.namecategoriaId === categoriaID)
            console.log(filterProductList)
            const result = (filterProductList.length === 0) ? dataBase : filterProductList
            setProd(result)
            setLoading(false)
            
            
          })
        },[categoriaID])
          
  return (
    <>
    {loading}
      <h1 className="greeting-tester"> Bienvenidos al Delivery mas Rapido de la Argentina!</h1>
      <ItemList prod={prod} />
    </>
  );
};
export default ItemListContainer;
