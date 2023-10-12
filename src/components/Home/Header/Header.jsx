import React, { useState, useEffect } from "react";
import "./Header.css";
import Nav from "./Nav/Nav";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="header"
      style={{
        backgroundColor: scrolling ? "#fff" : "unset",
        boxShadow: scrolling ? "0px 5px 15px rgba(0, 0, 0, 0.2)" : "",
      }}
    >
      <div className="header__container">
        <h1 className="header__logo">
          Tammy <span>Food</span>
        </h1>
        <Nav />
      </div>
    </header>
  );
}
