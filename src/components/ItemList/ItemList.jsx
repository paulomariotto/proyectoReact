import Item from "../Item/Item.jsx";

export const ItemList = ({ prod }) => {
  

  return (
    <>
      {prod.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </>
  );
};

export default ItemList;
