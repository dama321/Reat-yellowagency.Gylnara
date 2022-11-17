import React from "react";
import "./Footer.css";
import logo from "../image/logoD.png";

function Footer() {
  return (
    <div className="footerbg">
      <div className="footer_one">
        <img src={logo} alt="Второе logo" width="80px" height="80px" />
        {/* <img alt="Второе logo" /> */}
        <h2>2022 @YELLOWAGENCY.KG</h2>
        <br />
      </div>
      <div className="footer_text">
        <ul>
          <li>ОсСО Апиева Д.А.</li>
          <li>Патент № 317774600549836</li>
          <li>Наши контактные данные</li>
        </ul>
        <ul>
          <li>Политика конфедициальности</li>
          <li>Пользователькое соглашение</li>
          <li>Все права защищены</li>
        </ul>
        {/* <ul>
          <li>Бонусная система</li>
          <li>Вопрос и ответы</li>
          <li>Контакты</li>
        </ul> */}
      </div>
      {/* icons start */}
      <div className="wrapper">
        <div className="icon facebook">
          <div className="fooltip">Facebook</div>
          <span>
            <i className="fab fa-facebook-f"></i>
          </span>
        </div>
        <div className="icon whatsapp">
          <div className="fooltip">Whatsapp</div>
          <span>
            <i className="fab fa-whatsapp"></i>
          </span>
        </div>
        <div className="icon instagram">
          <div className="fooltip">Instagram</div>
          <span>
            <i className="fab fa-instagram"></i>
          </span>
        </div>
        <div className="icon telegram">
          <div className="fooltip">Telegram</div>
          <span>
            <i className="fab fa-telegram"></i>
          </span>
        </div>
        {/* icons end */}
      </div>
    </div>
  );
}

export default Footer;
