import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutCompany from "./Components/About/AboutCompany";
import Keys from "./Components/About/Keys";
import Services from "./Components/About/Services";
import HomePage from "./Components/HomePage/HomePage";
import OurClients from "./Components/OurClients/OurClients";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/clients" element={<OurClients />} />
      <Route path="/companu" element={<AboutCompany />} />
      <Route path="/services" element={<Services />} />
      <Route path="/keys" element={<Keys />} />
    </Routes>
  );
};

export default MainRoutes;
