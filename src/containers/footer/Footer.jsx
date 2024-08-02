import React from 'react';
import logoo from '../../assets/logoo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding" id="contact">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to control your expense in real-time?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logoo} alt="gpt3_logo" />
        <p> <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>kigali-Rwanda</p>
        <p>+250780032791</p>
        <p>etracker@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>&copy;2024 -eTRACKER group Ltd
      </p>
    </div>
  </div>
);

export default Footer;