import React, { useState } from "react";
import "./Order.css";
import backImg from "./img/back.png";

//

import { useSelector, useDispatch } from "react-redux";
import { selectCart, clearCart } from "../../../reducers/cartContentSlice";
import { hideOrder } from "../../../reducers/orderSlice";
import { hideCart } from "../../../reducers/cartSlice";

export default function Order() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    street: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let totalPrice = 0;
  const cart = useSelector(selectCart);
  cart.map((item) => (totalPrice += item.price * item.count));
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(hideOrder());
  };

  const handleOrder = () => {
    if (Object.values(formData).some((value) => value.trim() === "")) {
      alert("Please fill out all fields.");
    } else {
      alert("You ordered!");
      dispatch(hideOrder());
      dispatch(hideCart());
      dispatch(clearCart());
    }
  };

  return (
    <div className="order">
      <img className="order__back" src={backImg} alt="" onClick={handleBack} />
      <p>Order info....</p>
      <form className="order__form">
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Surname"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="text"
          placeholder="Street"
          name="street"
          value={formData.street}
          onChange={handleInputChange}
        />
      </form>
      <span>Total price: ${totalPrice}</span>
      <button onClick={handleOrder}>Order</button>
    </div>
  );
}
