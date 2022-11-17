import React from "react";
import Process from "../About/Process";
import Contact from "../Contact/Contact";
import Pagination from "../Pagination/Pagination";
import ProductList from "../Products/ProductList/ProductList";
import Slider from "../Slider/Slider";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Process />
      <ProductList />
      <Pagination />
      <Contact />
    </>
  );
};

export default HomePage;
