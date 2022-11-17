import React from "react";
import logoClient1 from "./inon/logoClient1.png";
import logoClient2 from "./inon/logoClient2.png";
import logoClient3 from "./inon/logoClient3.png";
import logoClient4 from "./inon/logoClient4.jpg";
import logoClient5 from "./inon/logoClient5.png";
import "./OurClients.css";

const OurClients = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <h2 className="logoClients">Клиенты: </h2>
      <div className="imagClient">
        <img src={logoClient1} alt="1" />
        <img src={logoClient2} alt="2" />
        <img src={logoClient3} alt="3" />
        <img src={logoClient4} alt="4" />
        <img src={logoClient5} alt="4" />
      </div>
    </div>
  );
};

export default OurClients;
