import React from 'react';
import './_style.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { GiCoffeeBeans } from "react-icons/gi";
import { MdOutlinePlace } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <Header />

      <main className="home-main">
          <h1><span className='brazilian-name'>The Brazilian </span><span className='cafe-name'>Cafe</span></h1>
      </main>

      <section className="home-menu">
        <picture>
          <img
            src="./assets/banner-flavour.jpg"
            alt="Our coffee flavour"
          />
        </picture>
        <div className="home-text">
          <h2 className='sub-title'>OUR CAFE FLAVOUR <GiCoffeeBeans /></h2>
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
          <h2 className='sub-title'>A PLACE TO BE <MdOutlinePlace /></h2>
          <p>
            <strong>A Place to Work, Connect, and Unwind.</strong>
          </p>
          <p>
          Whether you're looking for a cozy corner to catch up on emails, a communal table to collaborate with colleagues, or a peaceful retreat to enjoy a book, Brazilian Cafe is your go-to destination.
          </p>
        </div>
        <picture>
          <img src="./assets/banner-place.jpg" alt="A place to be" />
        </picture>
      </section>

      <section className="home-about">
        <picture>
          <img src="./assets/aboutusimage.jpg" alt="About us" />
        </picture>
        <div className="home-text">
          <h2 className='sub-title'>ABOUT US <FaPeopleRoof /></h2>
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
