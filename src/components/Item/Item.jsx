import React from "react";
import "./Item.scss";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <>
      <container>
        <row className="row-item">
          <ul className="ul-item">
            <li className="li-item">
              <Card className="card-item">
                <img className="item-img" src={prod.imagen} alt="" />
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>
                  <p>
                    <strong>Precio ${prod.precio} c/u</strong>
                  </p>
                  <Link to={`/product/${prod.id}`} className="detalle-item">
                    ver mas
                  </Link>
                </Card.Text>
              </Card>
            </li>
          </ul>
        </row>
      </container>
      <br></br>
    </>
  );
};

export default Item;
