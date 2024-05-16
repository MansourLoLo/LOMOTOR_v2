// UserInfoForm.js
import "./UserInfoForm.css";
import React, { useState } from "react";
import Button1 from "../../../components/buttons/button_1/Button1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUser,
  faMoneyBill,
  faGasPump,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function UserInfoForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  // Recuperar los datos del coche alquilado del localStorage
  const rentedCar = JSON.parse(localStorage.getItem("rentedCar"));

  return (
    <section className="User-info-form-container">
      <div className="img-user-info-container">
        <img src={rentedCar.img}></img>
      </div>
      <div className="info-car-payments-content">
        <div className="user-info-car-title">
          <h2>Información del usuario</h2>
        </div>

        <div className="info-car">
          <div className="payments name-car">
            <FontAwesomeIcon className="icon-payments" icon={faUser} />
            <div className="info-car-details">
              <p>Name:</p>
              <p>{rentedCar.text1}</p>
            </div>
          </div>
          <div className="payments name-price">
            <FontAwesomeIcon className="icon-payments" icon={faMoneyBill} />
            <div className="info-car-details">
              <p>Price:</p>
              <p>{rentedCar.price} $ /day</p>
            </div>
          </div>
          <div className="payments name-people">
            <FontAwesomeIcon className="icon-payments" icon={faUsers} />
            <div className="info-car-details">
              <p>People:</p>
              <p>{rentedCar.people} people</p>
            </div>
          </div>
          <div className="payments name-gas">
            <FontAwesomeIcon className="icon-payments" icon={faGasPump} />
            <div className="info-car-details">
              <p>Gas:</p>
              <p>{rentedCar.gas} L</p>
            </div>
          </div>
          <div className="payments name-transmission">
            <FontAwesomeIcon className="icon-payments" icon={faGear} />
            <div className="info-car-details">
              <p>Transmission:</p>
              <p>{rentedCar.transmission}</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="btn-payments-container">
          <Button1 submit={true} text={"Siguiente"} />
        </form>
      </div>
    </section>
  );
}
