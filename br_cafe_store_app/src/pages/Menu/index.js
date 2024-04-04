import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Menu = () => {
  return (
    <div>
      <Header />
      <main className="menu-main">
        <div className="menu">
          <h1>OUR FLAVOR</h1>
        </div>
      </main>

      <section className='menu-text'>
        <h2>PRODUCTS</h2>
        <div className="cards">
          <div className="card">
            <picture><img src="./assets/sabor-oreo.png" alt="Sorvete Oreo" /></picture>
            <h3>Brazilian Espresso</h3>
            <p>Brazilian espresso is a classic choice for coffee lovers seeking a bold and intense experience.</p>
          </div>

          <div className="card">
            <picture><img src="./assets/sabor-pistache.png" alt="Sorvete de Pistache" /></picture>
            <h3>Café com Leite (Coffee with Milk)</h3>
            <p>A beloved Brazilian tradition, café com leite combines strong Brazilian coffee with steamed milk.</p>
          </div>

          <div className="card">
            <picture><img src="./assets/sabor-cookies-avela.png" alt="Sorvete Cookies $ Avelã" /></picture>
            <h3>Cappuccino Brasileiro</h3>
            <p>Put a Brazilian twist on the traditional cappuccino by adding a sprinkle of cinnamon or cocoa powder on top.</p>
          </div>

          <div className="card">
            <picture><img src="./assets/sorbet-kiwi.png" alt="Sorvete de Kiwi" /></picture>
            <h3>Pingo (Drip Coffee)</h3>
            <p>For those who prefer a more straightforward coffee experience, offer Brazilian drip coffee, known locally as "pingo".</p>
          </div>

          <div className="card">
            <picture><img src="./assets/sorbet-morango.png" alt="Sorvete de Morango" /></picture>
            <h3>Cafézinho (Brazilian Black Coffee)</h3>
            <p>Embrace the simplicity of Brazilian black coffee, or cafézinho, which is typically served strong and sweet in small cups.</p>
          </div>

          <div className="card">
            <picture><img src="./assets/sorbet-limao.png" alt="Sorvete de Limão Siciliano" /></picture>
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
