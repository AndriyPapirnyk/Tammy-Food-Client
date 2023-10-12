import React from "react";
import "./Nav.css";
import cart from "./img/cart.png";
import burger from "./img/burger.png";

//

import { useSelector, useDispatch } from "react-redux";

//

import { showBurger, hideBurger } from "../../../../reducers/burgerSlice";
import { showCart, hideCart } from "../../../../reducers/cartSlice";

export default function Nav() {
  const showBurgerState = useSelector((state) => state.burger.showBurger);
  const showCartState = useSelector((state) => state.cart.showCart);
  const dispatch = useDispatch();

  const handleBurgerClick = () => {
    if (showBurgerState) {
      dispatch(hideBurger());
    } else {
      dispatch(showBurger());
    }
  };

  const handleCartClick = () => {
    if (showCartState) {
      dispatch(hideCart());
    } else {
      dispatch(showCart());
    }
  };

  return (
    <nav className="nav">
      <img
        onClick={handleBurgerClick}
        className="nav__burger"
        src={burger}
        alt=""
      />
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>About Us</li>
        <img src={cart} alt="" onClick={handleCartClick} />
      </ul>
    </nav>
  );
}
