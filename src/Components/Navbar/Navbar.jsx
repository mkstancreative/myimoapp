import React, { useState, useEffect } from "react";
import downAngle from "../Assets/icons/down_angle_bracket.svg";
import sideAngle from "../Assets/icons/Vector4.png";
import Logo from "../Assets/logo/logo.png";
import navClose from "../Assets/icons/close.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [serviceDropDown, setServiceDropDown] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleOpen = () => setToggleNav((prev) => !prev);

  const handleToggleClose = () => setToggleNav(false);

  const ToggleServiceDropDown = () => {
    console.log("Clicked");
    setServiceDropDown((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    if (serviceDropDown && !event.target.closest(".drop-down")) {
      setServiceDropDown(false);
    } else if (toggleNav && !event.target.closest(".nav-items")) {
      setToggleNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    const sideBarLink = document.querySelectorAll(".sideBarLinks");

    sideBarLink.forEach((link) => {
      link.addEventListener("click", handleToggleClose);
    });

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      sideBarLink.forEach((link) => {
        link.removeEventListener("click", handleToggleClose);
      });
    };
  }, [serviceDropDown, handleToggleClose]);

  return (
    <>
      <nav>
        <div className="hamburger" onClick={handleToggleOpen}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="nav-brand">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className={`nav-items ${toggleNav ? "active" : "close"}`}>
          <ul>
            <li className="sideBarLinks">
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li
              className="service-dropdown"
              onClick={ToggleServiceDropDown}
              aria-expanded={serviceDropDown}
            >
              <Link to="#">Services</Link>
              <img
                src={serviceDropDown ? downAngle : sideAngle}
                alt="Arrow"
                className="drop_down_icon"
              />
              <ul className={`drop-down ${serviceDropDown ? "show" : ""}`}>
                <li className="sideBarLinks">
                  <Link to="/digital-literacy">Digital Literacy</Link>
                </li>
                <li className="sideBarLinks">
                  <Link to="/e-governemt">E-Governmant Services</Link>
                </li>
                <li className="sideBarLinks">
                  <Link to="/resources" className="sideBarLinks">
                    Research Resources
                  </Link>
                </li>
                <li className="sideBarLinks">
                  <Link to="/ministries" className="sideBarLinks">
                    Ministries and Parastatals Directory
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sideBarLinks">
              <Link to="/news">News</Link>
            </li>
            <li className="sideBarLinks">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="sideBarLinks">
              <Link to="/emergency">Emergence</Link>
            </li>
            <li>
              <Link to="/contact" className="sideBarLinks">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" className="sideBarLinks get_started">
                Get Started
              </Link>
            </li>
            <div className="nav_close" onClick={handleToggleClose}>
              <img src={navClose} alt="close" />
            </div>
          </ul>
        </div>
        <div className="nav-register">
          <button>Get Started</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
