import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import logo from "./image/logoD.png";

function Header(props) {
  const [modalCart, setModalCart] = useState(false);
  return (
    <header>
      <div className="headerLeft">
        <img width={80} height={80} src={logo} />
        <div className="headerInfo">
          <h3 style={{ color: "yellow", fontSize: "6vmin" }}>
            YELLOWAGENCY.KG
          </h3>
        </div>
      </div>
      <ul className="headerRight">
        <li className="nav_bar home-nav">
          <Link to="/">Главная</Link>
        </li>
        <li className="nav_bar">
          <Link to="/companu">O компании</Link>
        </li>
        <li className="nav_bar">
          <Link to="/services">Услуги</Link>
          <a href="#"></a>
        </li>
        <li className="nav_bar cases_nav">
          <Link to="/keys">Кейсы</Link>
        </li>
        {/* <li className="nav_bar">
            <a href="#">Команда</a>
          </li> */}
        <li className="nav_bar clients_nav">
          <Link to="/clients">Клиенты</Link>
        </li>
        <li className="nav_bar reviews_nav">
          <Link to="/reviews">Отзывы</Link>
        </li>
        <li className="nav_icons">
          {modalCart === true ? <Drawer setModalCart={setModalCart} /> : null}
          <img
            onClick={() => setModalCart(true)}
            width={20}
            height={20}
            src="https://cdn-icons-png.flaticon.com/128/34/34627.png"
          />
        </li>
        <li className="nav_icons">
          <img
            width={20}
            height={20}
            src="https://cdn-icons-png.flaticon.com/512/5675/5675125.png "
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
