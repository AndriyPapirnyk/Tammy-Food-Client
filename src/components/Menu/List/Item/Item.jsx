import React from "react";
import "./Item.css";
import cart from "./img/cart.png";

//

import { useDispatch } from "react-redux";
import { addToCart } from "../../../../reducers/cartContentSlice";

export default function Item(props) {
  const dispatch = useDispatch();

  const handleAddToCart = (pizza) => {
    dispatch(addToCart(pizza));
  };

  return (
    <div className="item">
      <img className="item__dish" src={props.img} alt="" />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div className="item__row">
        <span>${props.price}</span>
        <img onClick={() => handleAddToCart(props)} src={cart} alt="" />
      </div>
    </div>
  );
}
