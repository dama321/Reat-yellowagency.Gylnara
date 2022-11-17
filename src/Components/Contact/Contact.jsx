import React from "react";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      {/* // ! ======= Section consultation start ====== */}
      <div
        className="section__consultation"
        style={{ width: "50%", margin: "10px auto", textAlign: "center" }}
      >
        <div className="consultation">
          <div className="consultation_info">
            <h4>Запишись на консультацию</h4>
            <h4>Ваше имя</h4>
            <Form.Control
              placeholder="Ваше имя"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <h4>Номер телефона</h4>
            <Form.Control
              placeholder="+996........"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <br />
            <Button variant="warning">Записаться</Button>
          </div>

          {/* <div class="section__consultation">
        <div class="consultation">
          <div class="consultation_info">
          <h4>Получи бесплатную консультацию</h4>
            <h4>Имя</h4>
            <hr class="hr" />
            <h4>Телефон</h4>
            <hr class="hr" />
          </div>
          <div>
            <button class="button__send">Отправить</button> */}
          {/* </div> */}
        </div>
      </div>
      {/* // ? ===== Section consultation end ===== */}
    </div>
  );
};

export default Contact;
