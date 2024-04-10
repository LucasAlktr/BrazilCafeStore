import React from "react";
import "./_style.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="transparent-header">
      <div className="header center">
        <picture>
          <img src="/assets/logo.png" alt="Brazilian Cafe" />
        </picture>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
