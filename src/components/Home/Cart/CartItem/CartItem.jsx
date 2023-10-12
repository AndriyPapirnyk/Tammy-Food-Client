import React from "react";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementAmount,
  decrementAmount,
} from "../../../../reducers/cartContentSlice";

export default function CartItem(props) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  const handleIncrementAmount = (itemId) => {
    dispatch(incrementAmount({ id: itemId }));
  };

  const handleDecrementAmount = (itemId) => {
    dispatch(decrementAmount({ id: itemId }));
  };

  return (
    <div className="cartItem">
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <div className="cartItem__count">
        <button onClick={() => handleDecrementAmount(props.id)}>-</button>
        <span>{props.count}</span>
        <button onClick={() => handleIncrementAmount(props.id)}>+</button>
      </div>
      <span>${props.price * props.count}</span>
      <button
        className="cartItem__remove"
        onClick={() => handleRemoveFromCart(props.id)}
      >
        x
      </button>
    </div>
  );
}
