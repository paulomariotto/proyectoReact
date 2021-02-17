import React from "react";
import "./style.scss";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  console.log(item);

  return (
    <>
      <div className="card-item">
        <Card>
          <img className="img-card" src={item.imagen} alt="" />
          <Link to={`/product/${item.id}`} className="btn btn-primary">
            ver mas
          </Link>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>

            <Card.Text>
              <p>${item.precio}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Item;
