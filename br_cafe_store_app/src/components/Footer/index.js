import React from 'react';
import './_style.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <picture>
          <img src="./assets/logo.png" alt="Cafe" />
        </picture>
        <div className="about-footer">
          <div className="ech">
            <h2>ADRESS</h2>
            <p>130 Dundas St</p>
            <p>London, ON N6A 1G2</p>
          </div>

          <div className="ech">
            <h2>CONTACT</h2>
            <p>braziliancafe@majorprojectjs4.com</p>
            <p>Phone: (999) 999-9999</p>
          </div>

          <div className="ech">
            <h2>HOURS</h2>
            <p>Monday - Sunday</p>
            <p>10:00am - 10:00pm</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 - BrazilianCafe - Copyright</p>
      </div>

    </footer>
  );
};

export default Footer;
