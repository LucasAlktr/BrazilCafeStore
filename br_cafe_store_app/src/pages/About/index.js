import React from 'react';
import './_styles.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GoogleMapsAPI from '../services/GoogleMapsAPI';


const About = () => {
  return (
    <div>
      <Header />
      <main className="about-main">
        <div className="about-div">
          <h1><span className='about-span'>About</span> <span className='us-span'>Us</span></h1>
        </div>
      </main>

      <section className="about-section">
        <h2>ABOUT US</h2>
        <p>
          <strong>We simple love coffee!</strong>
        </p>
        <p>
        At Brazilian Cafe, we're more than just a coffee shop - we're a family-owned establishment passionate about sharing the rich culture and traditions of Brazil with our community. From the moment you step through our doors, you'll be greeted with the irresistible aromas of freshly brewed Brazilian coffee and the inviting atmosphere of a true Brazilian cafe.
        </p>
        <p>
        Our journey began with a deep love for Brazilian coffee and a desire to create a space where people could come together to savor the authentic flavors of Brazil while connecting with friends, family, and colleagues. Drawing inspiration from the bustling cafes of São Paulo and the tranquil beaches of Bahia, we set out to bring a taste of Brazil to London.
        </p>
      </section>

      <section>
        <div className='map-container'>
          <h2>VISIT US:</h2>
           <GoogleMapsAPI />
        </div>
      </section>

      <section className="about-pic">
        <picture>
          <img src="./assets/coffee-cups.jpg" alt="people drink coffee" />
        </picture>
        <picture>
          <img src="./assets/open-image.jpg" alt="Brazilian Cafe Store" />
        </picture>
      </section>
      <Footer />
    </div>
  );
};

export default About;
