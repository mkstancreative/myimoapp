import React from "react";
import HeroSection from "../data/HeroSection";
import img6 from "./Assets/others/img6.jpeg";
import img4 from "./Assets/others/img4.jpeg";
import img8 from "./Assets/others/img8.png";
import img9 from "./Assets/others/img9.jpeg";
import img18 from "./Assets/others/img18.jpeg";
import img19 from "./Assets/others/img19.png";
import img20 from "./Assets/others/img20.png";
import img21 from "./Assets/others/img21.png";
import img22 from "./Assets/others/img22.png";
import img23 from "./Assets/others/img18.png";
import img26 from "./Assets/others/img26.png";
import img27 from "./Assets/others/img27.png";
import img28 from "./Assets/others/img28.png";
import img29 from "./Assets/others/img29.png";
import img30 from "./Assets/others/img30.png";
import img31 from "./Assets/others/img31.png";
import img32 from "./Assets/others/img32.png";
import img38 from "./Assets/others/img38.png";
import arrow_up from "../Components/Assets/icons/arrow-up.svg";
import NewsCard from "../Components/NewsCard/NewsCard";
import "./Assets/CSS/Main.css";
import { NewsProvider } from "../Context/NewsContext";

function Home() {
  return (
    <>
      <HeroSection pageType="home" />
      <main>
        <section className="vision-advocate">
          <div className="vision-advocate-block1">
            <div data-aos="fade-up">
              <img src={img18} alt="Image" />
            </div>
            <div className="vision-advocate-block1-sub" data-aos="fade-up">
              <div>
                <img src={img4} alt="Image" />
              </div>
              <div>
                <img src={img9} alt="image" />
              </div>
            </div>
            <div data-aos="fade-up">
              <img src={img6} alt="Image" />
            </div>
          </div>
          <div className="vision-advocate-block2">
            <button data-aos="fade-up">Visionary Advocate</button>
            <h1 data-aos="fade-up">
              Champion of <br />
              Progress: The <br />
              Inspiring Journey <br />
              of Our Governor
            </h1>
            <p data-aos="fade-up">
              Uzodimma began his political career as a party boss in Imo State,
              serving as a close associate to Governor Achike Udenwa until 2002.
              He then decamped to the Alliance for Democracy (AD) and contested
              the Imo State gubernatorial election in 2003. Although he lost, he
              later contested the PDP governorship primaries in 2006, coming in
              second to Senator Ifeanyi Araraume.
            </p>
            <button>Learn More</button>
          </div>
        </section>
        <section className="e-governemt-section">
          <div className="e-governemt-block1" data-aos="fade-up">
            <button>E-Government</button>
            <h1>Essential E-Government Services at Your Fingertips</h1>
            <p className="e-gov-block1-para">
              Simplified, secure, and accessible digital services designed to
              support your needs, from essential documentation to educational
              resources and more.
            </p>
          </div>
          <div className="e-governemt-block2" data-aos="fade-up">
            <div>
              <h2>E-Government Services</h2>
              <p>
                Online tax payment, digital <br />
                ID registration, other civic <br />
                functions.
              </p>
              <a href="">
                Learn More
                <img src={arrow_up} alt="arrow-up" />
              </a>
              <div>
                <img src={img19} alt="House" />
              </div>
            </div>
            <div>
              <h2>Digital Literacy</h2>
              <p>
                Tutorials and resources on <br />
                digital skills, financial <br />
                literacy, and e-governance.
              </p>
              <a href="">
                Learn More
                <img src={arrow_up} alt="arrow-up" />
              </a>
              <div>
                <img src={img21} alt="Laptop" />
              </div>
            </div>
            <div>
              <h2>News Portal</h2>
              <p>
                Categorized news sections, <br />
                government updates, <br />
                public announcements.
              </p>
              <a href="">
                Learn More
                <img src={arrow_up} alt="arrow-up" />
              </a>
              <div>
                <img src={img22} alt="Newspaper" />
              </div>
            </div>
            <div>
              <h2>Job Publication</h2>
              <p>
                Job listings and <br />
                opportunities in both <br />
                government and private <br />
                sectors.
              </p>
              <a href="">
                Learn More
                <img src={arrow_up} alt="arrow-up" />
              </a>
              <div>
                <img src={img20} alt="Newspaper" />
              </div>
            </div>
            <div>
              <h2>Research Resources</h2>
              <p>
                Access to government- <br />
                published research and <br />
                insights.
              </p>
              <a href="">
                Learn More
                <img src={arrow_up} alt="arrow-up" />
              </a>
              <div>
                <img src={img23} alt="Newspaper" />
              </div>
            </div>
            <div>
              <h2>Ministries and Parastatals Directory</h2>
              <p>
                Comprehensive directory <br />
                with contact information <br />
                and service details.
              </p>
              <a href="">
                Learn More
                <img src={arrow_up} alt="arrow-up" />
              </a>
              <div>
                <img src={img23} alt="Newspaper" />
              </div>
            </div>
          </div>
        </section>
        <section className="imo-tourism">
          <div className="imo-tourism-block1" data-aos="fade-up">
            <button>Imo Tourism</button>
            <h1>
              Eastern <br />
              Heartland
            </h1>
            <p>
              Imo State (Igbo: Ọha Imo) is a state in the South-East <br />
              geopolitical zone of Nigeria, bordered to the north by Anambra
              State,
              <br />
              Rivers State to the west and south, and Abia State to the <br />
              east. It takes its name from the Imo River which flows along the
              <br />
              state's eastern border. The state capital is Owerri and the <br />
              State's slogan is the "Eastern Heartland."
            </p>
            <button>Learn More</button>
          </div>
          <div className="imo-tourism-block2" data-aos="fade-up">
            <div>
              <div>
                <img src={img8} alt="round about" />
                <span>Round About Owerri</span>
              </div>
              <div>
                <img src={img27} alt="Imo House" />
                <span>Imo State House of Assembly</span>
              </div>
            </div>
            <div>
              <div>
                <img src={img26} alt="Heros Square" />
                <span>Status At Heros Square</span>
              </div>
              <div>
                <img src={img28} alt="Assumpta" />
                <span>Assumpta Cathedral Owerri</span>
              </div>
            </div>
          </div>
        </section>

        <section className="access-vital">
          <div className="access-vital-block1" data-aos="fade-up">
            <div>
              <div>
                <img src={img29} alt="round about" />
              </div>
              <div>
                <img src={img31} alt="Imo House" />
              </div>
            </div>
            <div>
              <div>
                <img src={img30} alt="Heros Square" />
              </div>
              <div>
                <img src={img32} alt="Assumpta" />
              </div>
            </div>
          </div>
          <div className="access-vital-block2" data-aos="fade-up">
            <button>We're Here for You</button>
            <h1>
              Access vital support <br />
              services and <br />
              emergency contacts.
            </h1>
            <p>For your peace of mind.</p>
            <button>See Contacts</button>
          </div>
        </section>

        <section className="news_portal_section">
          <div className="news_portal">
            <button data-aos="fade-up">Stay Up to Date</button>
            <h1 data-aos="fade-up">News Portal</h1>
            <p data-aos="fade-up">
              Stay informed on the latest government updates and announcements.
            </p>
          </div>
          <div className="news_portal2" data-aos="fade-up">
            <NewsProvider>
              <NewsCard />
            </NewsProvider>
            <div className="news_portal_block">
              <button>Learn More</button>
            </div>
          </div>
        </section>

        <section className="get-in-touch" data-aos="fade-up">
          <div>
            <img src={img38} alt="Girl" />
          </div>
          <div>
            <div>
              <h1>
                Your questions and <br />
                feedback matter— <br />
                reach out today!
              </h1>
              <p>We’re Here to Help</p>
              <button>Get In Touch</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
