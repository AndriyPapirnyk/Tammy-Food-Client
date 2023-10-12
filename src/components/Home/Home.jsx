import React from "react";
import "./Home.css";
import illustration from "./img/illustration.png";
import Header from "./Header/Header";
import Burger from "./Header/Burger/Burger";
import Cart from "./Cart/Cart";
import Order from "./Order/Order";
import { useSelector } from "react-redux";

export default function Home() {
  const showBurger = useSelector((state) => state.burger.showBurger);
  const showCart = useSelector((state) => state.cart.showCart);
  const showOrder = useSelector((state) => state.order.showOrder);

  return (
    <section className="home">
      <Header />
      {showBurger && <Burger />}
      {showCart && <Cart />}
      {showOrder && <Order />}
      <div className="home__container">
        <main className="home__main">
          <div className="home__main-main">
            <div>Fast Delivery</div>
            <h1>
              Discover Your Favourite <br /> Food and <span>Test Forever</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              <br /> industry. Lorem Ipsum has been the industry's standard
              dummy <br /> text ever since the 1500s.
            </p>
            <button>Get Started</button>
          </div>
          <img src={illustration} alt="" />
        </main>
      </div>
    </section>
  );
}
