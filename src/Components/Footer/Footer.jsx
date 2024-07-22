import React from "react";
import "./Footer.css";
import { assets } from "./../../Assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-logo" src={assets.logo} alt="" />
          <p>
            Skip the dishes and the hassle! We connect you with your favorite
            restaurants, offering fast and convenient food delivery. Order
            online and enjoy a delicious meal at home, without ever leaving the
            couch.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91xxxxxxxxxx</li>
            <li>contact@beastBites.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 &copy; beastBites.com - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
