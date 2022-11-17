import React from "react";
import "./AboutCompany.css";

const AboutCompany = () => {
  return (
    <div className="comp">
      <img
        src="https://aqil.com.my/img/4.jpg"
        width="100%"
        height="400px"
        alt=""
      />
      <p className="office">
        Маркетинговое агенство <strong>YellowAgency</strong> было основано в
        марте 2022 года. Со дня своего основания команда работает без офиса, что
        позволяет экономить для клиентов до 50 %.Креативное агенство YELLOW D 🧡
        - это 8 взрослых штатных сотрудников и еще 8 внештатных, которые стоят
        во главе первых восьми. Для тех кто запутался: 8 человек в команде и 8
        детей этих самых человек 😍.
      </p>
    </div>
  );
};

export default AboutCompany;
