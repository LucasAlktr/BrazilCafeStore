import React from 'react';

import './_style.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Menu = () => {
  return (
    <div>
      <Header />
      <main className="menu-main">
        <div className="menu">
          <h1><span className='our-text'>Our</span> <span className='flavour-text'>Flavour</span></h1>
        </div>
      </main>

      <section className='menu-text'>
        <h2>PRODUCTS</h2>
        <div className="cards">
          <div className="card">
            <picture><img src="./assets/coffee_cup.jpg" alt="Brazilian Espresso image" /></picture>
            <h3>Brazilian Espresso</h3>
            <p>Brazilian espresso is a classic choice for coffee lovers seeking a bold and intense experience.</p>
          </div>

          <div className="card">
            <picture><img src="./assets/coffee_cup.jpg" alt="Coffee with Milk image" /></picture>
            <h3>Café com Leite (Coffee with Milk)</h3>
            <p>A beloved Brazilian tradition, café com leite combines strong Brazilian coffee with steamed milk.</p>
          </div>

          <div className="card">
            <picture><img src="./assets/coffee_cup.jpg" alt="Cappuccino Brasileiro image" /></picture>
            <h3>Cappuccino Brasileiro</h3>
            <p>Put a Brazilian twist on the traditional cappuccino by adding a sprinkle of cinnamon or cocoa powder on top.</p>
          </div>

          <div className="card">
            <picture><img src="./assets/coffee_cup.jpg" alt="Drip Coffee image" /></picture>
            <h3>Pingo (Drip Coffee)</h3>
            <p>For those who prefer a more straightforward coffee experience, offer Brazilian drip coffee, known locally as "pingo".</p>
          </div>

          <div className="card">
            <picture><img src="./assets/coffee_cup.jpg" alt="Brazilian Black Coffee image" /></picture>
            <h3>Cafézinho (Brazilian Black Coffee)</h3>
            <p>Embrace the simplicity of Brazilian black coffee, or cafézinho, which is typically served strong and sweet in small cups.</p>
          </div>

          <div className="card">
            <picture><img src="./assets/coffee_cup.jpg" alt="Cold Brew image" /></picture>
            <h3>Cold Brew</h3>
            <p>Capture the refreshing taste of Brazilian coffee with cold brew, a slow-steeped coffee concentrate that's smooth, low in acidity, and packed with flavor.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Menu;