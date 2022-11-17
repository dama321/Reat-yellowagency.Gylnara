import React from "react";
import "./Keys.css";
import video from "../video/treveles.mp4";
const Keys = () => {
  return (
    <div className="keys">
      <ul className="face">
        <li style={{ fontSize: "60px" }}>Кейсы: </li>
        <li>PR для крупных бизнес-мероприятий</li>
        <li>PR для стартапов</li>
        <li>PR для первых лиц</li>
      </ul>
      <video className="treveles-video" loop video autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Keys;
