import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList/ItemList.jsx";

import ItemsPromise from "../components/productos/productosList.jsx";

const ItemListContainer = ({ greeting }) => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    ItemsPromise.then((result) => setProd(result));
  }, []);

  return (
    <>
      <h1 className="greeting-tester"> {greeting} </h1>
      {prod.length < 1 ? <h3>Cargando...</h3> : <ItemList items={prod} />}
    </>
  );
};
export default ItemListContainer;
