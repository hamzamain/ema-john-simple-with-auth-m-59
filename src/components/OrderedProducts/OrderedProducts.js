import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./OrderedProducts.css";

const OrderedProducts = ({ product, handler }) => {
  const { name, img, quantity, shipping, id } = product;
  return (
    <div className="container">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="detail-container">
        <div className="details">
          <p>Name: {name}</p>
          <p>
            <small>quantity: {quantity}</small>
          </p>
          <p>
            <small>Shipping: {shipping}</small>
          </p>
        </div>
        <div className="btn-container">
          <button onClick={() => handler(id)}>
            <FontAwesomeIcon
              className="btn"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderedProducts;
