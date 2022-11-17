import React from "react";
import Card from "../../Card/Card";
import imgDamira from "../../image/Damira.jpg";
import imgVika from "../../image/Vika.jpg";
import imgJika from "../../image/Jika.jpg";
import imgAliya from "../../image/Aliya.jpg";

const ProductList = () => {
  let directors = [
    {
      id: 1,
      image: imgDamira,
      name: "Damira Apieva",
      position: "Основатель агентства",
    },
    {
      id: 2,
      image: imgVika,
      name: "Vika Tsoi",
      position: "Финансовый менеджер агентства",
    },
    {
      id: 3,
      image: imgJika,
      name: "Jika Mamavisual",
      position: "Сотрудник агентства",
    },
    {
      id: 4,
      image: imgAliya,
      name: "Aliya Mamytova",
      position: "Сотрудник агентства",
    },
  ];
  return (
    <div style={{ display: "flex", width: "85vw" }}>
      <h3 className="team">Команда</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          width: "90%",
        }}
      >
        {directors.map((obj) => {
          // console.log(obj);
          return <Card obj={obj} key={obj.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
