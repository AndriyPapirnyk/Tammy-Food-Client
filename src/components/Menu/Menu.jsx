import React from "react";
import "./Menu.css";
import List from "./List/List";

export default function Menu() {
  return (
    <section className="menu">
      <div className="menu__container">
        <div className="menu__heading">
          <h1>Our Delicious Dish</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br /> industry. Lorem Ipsum has been the industry
          </p>
        </div>
        <List />
      </div>
    </section>
  );
}
