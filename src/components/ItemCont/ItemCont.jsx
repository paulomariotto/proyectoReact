import "./ItemCont.scss";
import { useState } from "react";
import { Button } from "react-bootstrap";
const ItemCount = ({ onAdd }) => {
 
 
  const [contador, setContador] = useState(1);

  const sumar = () => {
    let max = 10;
    if (contador < max) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    let min = 1;
    if (contador > min) {
      setContador(contador - 1);
    }
  };
  const handlerOnAdd = () => {
    onAdd(contador);
  };

  return (
    <>
      <div className="item-count-count">
        <ul className="ul-contador">
          <li className="li-contador ">
            <button className="li-button-menos" onClick={restar}>
              <strong>-</strong>
            </button>
          </li>
          <li className="li-contador">
            <span>{contador}</span>
          </li>
          <li className="li-contador ">
            <button className="li-button-mas" onClick={sumar}>
              <strong>+</strong>
            </button>
          </li>
        </ul>
        <Button variant="primary" onClick={(handlerOnAdd)}>
          Agregar al Carrito
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
