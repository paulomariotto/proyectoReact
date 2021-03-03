import Item from "../Item/Item.jsx";

export const ItemList = ({ items }) => {
  

  return (
    <>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
};

export default ItemList;
