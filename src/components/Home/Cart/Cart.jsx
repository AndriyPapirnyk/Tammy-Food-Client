import React from "react";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";

//

import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../../../reducers/cartContentSlice";

//

import { showOrder } from "../../../reducers/orderSlice";
export default function Cart() {
  const cart = useSelector(selectCart);
  //   const showOrderState = useSelector((state) => state.order.showOrder);
  const dispatch = useDispatch();

  const handleOrderClick = () => {
    dispatch(showOrder());
  };

  return (
    <div className="cart">
      <div className="cart__list">
        {cart.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "clamp(18px,5vw,32px)",
              fontWeight: "600",
            }}
          >
            Cart is empty...
          </p>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              item={item}
              id={item.id}
              count={item.count}
            />
          ))
        )}
      </div>
      {cart.length !== 0 && (
        <button className="cart__order" onClick={handleOrderClick}>
          Order
        </button>
      )}
    </div>
  );
}

// onClick={handleOrderClick}
