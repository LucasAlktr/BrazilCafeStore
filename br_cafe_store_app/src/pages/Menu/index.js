import React from "react";
import "./_style.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Reservation from "../Reservation";
import { BiCoffeeTogo } from "react-icons/bi";

const Menu = ({ reservation }) => {
  return (
    <div>
      <Header />
      <main className="menu-main">
        <div className="menu">
          <h1>
            <span className="our-text">Our</span>{" "}
            <span className="flavour-text">Flavour</span>
          </h1>
        </div>
      </main>

      <section className="menu-text">
        <h2>
          PRODUCTS <BiCoffeeTogo />
        </h2>
        <div className="cards">
          <div className="card">
            <picture>
              <img src="./assets/coffee_cup.jpg" alt="Brazilian Espresso" />
            </picture>
            <h3>Brazilian Espresso</h3>
            <strong>$3.85</strong>
            <p>
              Brazilian espresso is a classic choice for coffee lovers seeking a
              bold and intense experience.
            </p>
          </div>

          <div className="card">
            <picture>
              <img src="./assets/coffee_cup.jpg" alt="Coffee with Milk" />
            </picture>
            <h3>Café com Leite (Coffee with Milk)</h3>
            <strong>$3.95</strong>
            <p>
              A beloved Brazilian tradition, café com leite combines strong
              Brazilian coffee with steamed milk.
            </p>
          </div>

          <div className="card">
            <picture>
              <img src="./assets/coffee_cup.jpg" alt="Cappuccino Brasileiro" />
            </picture>
            <h3>Cappuccino Brasileiro</h3>
            <strong>$4.90</strong>
            <p>
              Put a Brazilian twist on the traditional cappuccino by adding a
              sprinkle of cinnamon or cocoa powder on top.
            </p>
          </div>

          <div className="card">
            <picture>
              <img src="./assets/coffee_cup.jpg" alt="Drip Coffee" />
            </picture>
            <h3>Pingo (Drip Coffee)</h3>
            <strong>$3.45</strong>
            <p>
              For those who prefer a more straightforward coffee experience,
              offer Brazilian drip coffee, known locally as "pingo".
            </p>
          </div>

          <div className="card">
            <picture>
              <img src="./assets/coffee_cup.jpg" alt="Brazilian Black Coffee" />
            </picture>
            <h3>Cafézinho (Brazilian Black Coffee)</h3>
            <strong>$3.10</strong>
            <p>
              Embrace the simplicity of Brazilian black coffee, or cafézinho,
              which is typically served strong and sweet in small cups.
            </p>
          </div>

          <div className="card">
            <picture>
              <img src="./assets/coffee_cup.jpg" alt="Cold Brew" />
            </picture>
            <h3>Cold Brew</h3>
            <strong>$5.20</strong>
            <p>
              Capture the refreshing taste of Brazilian coffee with cold brew, a
              slow-steeped coffee concentrate that's smooth, low in acidity, and
              packed with flavor.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="delivery-order">
          <h2>ORDER NOW</h2>
        </div>
        <div className="delivery-logo">
            <img
              className="uber-logo"
              src="assets/ubereats-logo.png"
              alt="UberEats"
            />
            <img
              className="doordash-logo"
              src="assets/doordash-logo.png"
              alt="Doordash"
            />
        </div>
      </section>

      <Reservation reservation={reservation} />

      <Footer />
    </div>
  );
};

export default Menu;
