import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />

      <main className="home-main">
        <div className="home">
          <h1>Brazilian Cafe</h1>
        </div>
      </main>

      <section className="home-menu">
        <picture>
          <img
            src="./assets/banner-sabores.jpg"
            alt="Sorvete de diversos sabores"
          />
        </picture>
        <div className="home-text">
          <h2>OUR CAFE FLAVOUR</h2>
          <p>
            <strong>Welcome to Brazilian Cafe!</strong>
          </p>
          <p>
          Experience the vibrant flavors and inviting ambiance of Brazil right here in London! Indulge in the rich aromas and authentic tastes of Brazilian coffee and cuisine at our cozy cafe.Step into our cafe and immerse yourself in the warmth and hospitality of Brazil. Whether you're here to work, relax, or socialize, we have the perfect spot for you.
          </p>
        </div>
      </section>

      <section className="home-place">
        <div className="home-text">
          <h2>A PLACE TO BE</h2>
          <p>
            <strong>A Place to Work, Connect, and Unwind.</strong>
          </p>
          <p>
          Whether you're looking for a cozy corner to catch up on emails, a communal table to collaborate with colleagues, or a peaceful retreat to enjoy a book, Brazilian Cafe is your go-to destination.
          </p>
        </div>
        <picture>
          <img src="./assets/eventos-image.jpg" alt="Sorvete para enventos" />
        </picture>
      </section>

      <section className="home-about">
        <picture>
          <img src="./assets/sobre-image.jpg" alt="Amigos tomando sorvete" />
        </picture>
        <div className="home-text">
          <h2>ABOUT US</h2>
          <p>
            <strong>From Our Family to Yours</strong>
          </p>
          <p>
          As a family-owned cafe, we take pride in sharing the warmth and authenticity of Brazilian culture with our guests. Join us and become part of the Brazilian Cafe family today.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
