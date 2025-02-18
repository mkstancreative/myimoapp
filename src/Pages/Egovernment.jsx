import React from "react";
import tax from "./Assets/others/tax.png";
import digital from "./Assets/others/digital id.png";
import drivers from "./Assets/others/drivers licence.png";
import vehicle from "./Assets/others/vehicle reg.png";
import voters from "./Assets/others/voters.png";
import nin from "./Assets/others/nin.png";
import bvn from "./Assets/others/bvn.png";
import residency from "./Assets/others/residency.png";
import HeroSection from "../data/HeroSection";

function Egovernment() {
  return (
    <>
      <HeroSection pageType="e_goverment" />
      <main>
        <section className="services">
          <h1 data-aos="fade-right">Services</h1>
          <div className="services-block" data-aos="fade-up">
            <div className="service-block-list">
              <div className="sb-image">
                <img src={tax} alt="tax" />
              </div>
              <h3>Online Tax Payment</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                error?
              </p>
              <a href="#">
                Go to Site <span>&#x2197;</span>
              </a>
            </div>
            <div className="service-block-list">
              <div>
                <img src={digital} alt="Digital" />
              </div>
              <h3>Digital ID registration</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                error?
              </p>
              <a href="#">
                Go to Site <span>&#x2197;</span>
              </a>
            </div>
            <div className="service-block-list">
              <div>
                <img src={drivers} alt="Drivers" />
              </div>
              <h3>Drivers Licence</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                error?
              </p>
              <a href="#">
                Go to Site <span>&#x2197;</span>
              </a>
            </div>
            <div className="service-block-list">
              <div>
                <img src={vehicle} alt="vehicle" />
              </div>
              <h3>Vehicle Registration</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                error?
              </p>
              <a href="#">
                Go to Site <span>&#x2197;</span>
              </a>
            </div>
            <div className="service-block-list">
              <div className="sb-image">
                <img src={voters} alt="voters card" />
              </div>
              <h3>Voters Card</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                error?
              </p>
              <a href="#">
                Go to Site <span>&#x2197;</span>
              </a>
            </div>
            <div className="service-block-list">
              <div>
                <img src={nin} alt="Digital" />
              </div>
              <h3>NIN Registration</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                error?
              </p>
              <a href="#">
                Go to Site <span>&#x2197;</span>
              </a>
            </div>
            <div className="service-block-list">
              <div>
                <img src={bvn} alt="Drivers" />
              </div>
              <h3>BVN Registration</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                error?
              </p>
              <a href="#">
                Go to Site <span>&#x2197;</span>
              </a>
            </div>
            <div className="service-block-list">
              <div>
                <img src={residency} alt="residency" />
              </div>
              <h3>Residency</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                error?
              </p>
              <a href="#">
                Go to Site <span>&#x2197;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Egovernment;
