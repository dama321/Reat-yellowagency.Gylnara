import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../image/photoSlider1.jpg";
import slider2 from "../image/photoSlider2.jpg";
import slider3 from "../image/photoSlider3.jpg";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      style={{ height: "800px" }}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item className="carousel-item">
        <img
          style={{ maxHeight: "800px" }}
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-text">
          <h3>Для бизнеса и его первых лиц.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          style={{ maxHeight: "800px" }}
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption className="carousel-text">
          <h3>
            Оставаться динамичным небольшим агентством без офиса с печеньями,
            аренда которого увеличивает клиентские прайсы.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          style={{ maxHeight: "800px" }}
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption className="carousel-text">
          <h3>Упакуем бизнес для масштабирования, лидерства и инвестиций.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
