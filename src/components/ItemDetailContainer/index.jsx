import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import ItemsPromise from "../productos/productosList";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    ItemsPromise.then((resp) => {
      setItem(resp.find((li) => li.id === id));
    });
  }, [id]);
  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
