import React from "react";
import "./Assets/CSS/Main.css";
import civil_defense from "../Components/Assets/logo/civil defense.png";
import custom from "../Components/Assets/logo/nigerian Custom.png";
import correctional from "../Components/Assets/logo/Nigeria Correctional Service.png";
import police from "../Components/Assets/logo/police.png";
import immigration from "../Components/Assets/logo/immigration.png";
import imo_state_logo from "../Components/Assets/logo/imo-logo2.png";
import HeroSection from "../data/HeroSection";

function Emergency() {
  return (
    <>
      <HeroSection pageType="emergency" />
      <main>
        <section className="emergence-section">
          <h1>Emergency Contacts</h1>
          <div className="emergence-block">
            <div>
              <div>
                <img src={police} alt="Police" />
              </div>
              <p>Imo State police command's control room</p>
              <p>08034773600</p>
            </div>
            <div>
              <div>
                <img src={civil_defense} alt="Civil defense" />
              </div>
              <p>NSCDC</p>
              <p>
                07045245469 <br />
                08063103701
              </p>
            </div>
            <div>
              <div>
                <img src={correctional} alt="Correctional Service" />
              </div>
              <p>CORRECTIONAL SERVICE, PRO</p>
              <p>0803 478 8014</p>
            </div>
          </div>
          <div className="emergence-block">
            <div>
              <div>
                <img src={immigration} alt="" />
              </div>
              <p>Immigration, PRO</p>
              <p>
                08065452582 <br />
                07036239606
              </p>
            </div>
            <div>
              <div>
                <img src={custom} alt="Nigerian Custom" />
              </div>
              <p>Customs PRO phone number</p>
              <p>+2348063413980</p>
            </div>
            <div>
              <div>
                <img src={imo_state_logo} alt="Imo State Logo " />
              </div>
              <p>IMO State Emergency Communication Centre</p>
              <p>112</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Emergency;
