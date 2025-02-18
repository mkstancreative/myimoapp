import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Emergency from "./Pages/Emergency";
import Jobs from "./Pages/Jobs";
import News from "./Pages/News";
import DigitalLiteracy from "./Pages/DigitalLiteracy";
import Egovernment from "./Pages/Egovernment";
import Resources from "./Pages/Resources";
import Ministries from "./Pages/Ministries";
import "./Pages/Assets/CSS/Responsive.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route
            path="/jobs"
            element={
              <Jobs isOpenModal={isOpenModal} handleModal={handleModal} />
            }
          />
          <Route
            path="/digital-literacy"
            element={
              <DigitalLiteracy
                isOpenModal={isOpenModal}
                handleModal={handleModal}
              />
            }
          />
          <Route path="/e-governemt" element={<Egovernment />} />
          <Route
            path="/resources"
            element={
              <Resources isOpenModal={isOpenModal} handleModal={handleModal} />
            }
          />
          <Route path="/ministries" element={<Ministries />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
