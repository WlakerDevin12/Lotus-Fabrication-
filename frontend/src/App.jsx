import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import Footer from "./component/Footer";
import About from "./Pages/About";
import Bannerholding from "./Pages/Bannerholding";
import Flexprinting from "./Pages/Flexprinting";
import Ironframe from "./Pages/Ironframe";
import Letterboard from "./Pages/Letterboard";
import Welding from "./Pages/Welding";
import StandeeDesign from "./Pages/StandeeDesign";
import Contact from "./Pages/Contact";
import ScrollTop from "./component/ScrollTop";

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bannerholding" element={<Bannerholding/>} />
        <Route path="/flexprinting" element={<Flexprinting/>} />
        <Route path="/ironframe" element={<Ironframe/>} />
        <Route path="/letterboard" element={<Letterboard/>} />
        <Route path="/welding" element={<Welding/>} />
        <Route path="/standee" element={<StandeeDesign/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      <Footer />
    </div>
  );
};
export default App;
