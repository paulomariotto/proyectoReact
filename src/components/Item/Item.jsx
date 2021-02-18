import React from "react";
import "./Item.scss";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <>
      <container>
        <row className="row-item">
          <ul className="ul-item">
            <li className="li-item">
              <Card className="card-item">
                <img className="item-img" src={item.imagen} alt="" />
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <p>
                    <strong>Precio ${item.precio} c/u</strong>
                  </p>
                  <Link to={`/product/${item.id}`} className="detalle-item">
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
