import React from "react";
import "./Footer.css";
import Logo from "../Assets/logo/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="join-community">
        <div className="join-community-block">
          <h1>
            Join Our Digital Government <br />
            Community
          </h1>
          <p>
            Access essential services, resources, and updates—sign up to manage
            everything securely in one place.
          </p>
          <Link to="">Get Started</Link>
          <Link to="">Login</Link>
        </div>
        <div className="join-community-block2"></div>
      </section>
      <footer>
        <div className="foot-block">
          <div className="foot-logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="index.html">Home</Link>
            </li>
            <li>
              <Link to="contact.html">Services</Link>
            </li>
            <li>
              <Link to="news.html">News</Link>
            </li>
            <li>
              <Link to="jobs.html">Jobs</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Resources</Link>
            </li>
            <li>
              <Link to="#">Emergence</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
          </ul>
          <div className="newsletter-block">
            <h1>
              Get Connected: Join <br />
              Our Newsletter Today!
            </h1>
            <form action="">
              <input type="Email" placeholder="email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="foot-line"></div>
        <div className="foot-block2">
          <p>MYIMO &COPY; 2024, All Rihts Reserved</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
