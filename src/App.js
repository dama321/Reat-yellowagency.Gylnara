import Header from "./Components/Header";
// import Drawer from "./Components/Drawer";
import ProductList from "./Components/Products/ProductList/ProductList";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./Components/Pagination/Pagination";

// import NavBar from "./Components/NavBar/NavBar";
import Slider from "./Components/Slider/Slider";
import OurClients from "./Components/OurClients/OurClients";
import Contact from "./Components/Contact/Contact";
import Process from "./Components/About/Process";
import MainRoutes from "./MainRoutes";

function App() {
  const [modalCart, setModalCart] = useState(false);

  return (
    <>
      <div className="container">
        <Header />
        {/* <NavBar /> */}
        {/* <Slider />
        <Process />
        <ProductList /> */}
        {/* <OurClients /> */}
        <MainRoutes />
        {/* <Contact />
        <Pagination /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
