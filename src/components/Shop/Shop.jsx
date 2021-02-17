import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import ItemsPromise from "../productos/productosList";
import { useParams } from "react-router-dom";

const Shop = () => {
  const [shopItems, setShopItems] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    ItemsPromise.then((resp) => {
      setShopItems(resp.filter((bebi) => bebi.categoriaId === categoriaId));
    });
  }, []);

  return (
    <>
      <h2>{categoriaId}</h2>
     <ItemList items={shopItems} />   
       </>
  );
};

export default Shop;
