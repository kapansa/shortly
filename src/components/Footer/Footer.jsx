import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo-white.svg";
import Facebook from "../../assets/icon-facebook.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Pinterest from "../../assets/icon-pinterest.svg";
import Instagram from "../../assets/icon-instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="item-1">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="item-2">
          <h4>Features</h4>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="item-3">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="item-4">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="social-icons">
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Pinterest} alt="Pinterest" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
