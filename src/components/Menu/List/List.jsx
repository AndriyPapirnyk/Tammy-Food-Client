import React from "react";
import "./List.css";
import pizza1 from "./img/1.png";
import pizza2 from "./img/2.png";
import pizza3 from "./img/3.png";
import pizza4 from "./img/4.png";
import pizza5 from "./img/5.png";
import pizza6 from "./img/6.png";
import pizza7 from "./img/7.png";
import pizza8 from "./img/8.png";
import Item from "./Item/Item";

const pizzaList = [
  {
    id: 1,
    img: pizza1,
    name: "Pepperoni Passion",
    price: 12.99,
    description: "Spicy pepperoni with extra cheese, a classic favorite.",
    count: 1,
  },
  {
    id: 2,
    img: pizza2,
    name: "Margherita Marvel",
    price: 10.99,
    description: "Fresh tomatoes, mozzarella, and basil, simple and delicious.",
    count: 1,
  },
  {
    id: 3,
    img: pizza3,
    name: "Vegetarian Delight",
    price: 11.99,
    description: "Loaded with colorful veggies for a healthy treat.",
    count: 1,
  },
  {
    id: 4,
    img: pizza4,
    name: "Hawaiian Luau",
    price: 13.99,
    description: "Ham, pineapple, and a taste of the tropics in every bite.",
    count: 1,
  },
  {
    id: 5,
    img: pizza5,
    name: "Meat Lovers Paradise",
    price: 14.99,
    description: "A carnivore’s dream with a variety of meats and cheeses.",
    count: 1,
  },
  {
    id: 6,
    img: pizza6,
    name: "BBQ Chicken Bliss",
    price: 12.99,
    description: "Grilled chicken, barbecue sauce, and a hint of smokiness.",
    count: 1,
  },
  {
    id: 7,
    img: pizza7,
    name: "Mushroom Magic",
    price: 11.99,
    description: "Savory mushrooms and creamy cheese for earthy delight.",
    count: 1,
  },
  {
    id: 8,
    img: pizza8,
    name: "Supreme Sensation",
    price: 13.99,
    description: "Loaded with all the toppings for the ultimate experience.",
    count: 1,
  },
];

export default function List() {
  return (
    <div className="list">
      {pizzaList.map((item) => (
        <Item
          key={item.name} // fix that !!!!!!!!!!!
          img={item.img}
          name={item.name}
          description={item.description}
          price={item.price}
          id={item.id}
          count={item.count}
        />
      ))}
    </div>
  );
}
