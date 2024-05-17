import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./Cars.css";
import Header from "../../components/header/Header";
import Card from "../../components/cards/Card_3/Card3";
import Footer from "../../components/footer/Footer";
import CarSeacher from "../../components/Car_searcher/CarSeacher";
import TitlePage from "../../components/Title-pages/title-page_1/TitlePage";
import CarsList from "../../components/car-list/CarsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Cars() {
  const [type, setType] = useState("All");

  const handleClickFilter = (typeParam) => {
    setType(typeParam);
  };

  const [showSearcher, SetshowSearcher] = useState(false);

  const carModels = CarsList();

  console.log(carModels);

  const calculePrice = (fuel_consumption, ) =>{
    
    const basicPrice = fuel_consumption > 18 ? 70 : 40
    const gas = 1.46

    let mileageCity = fuel_consumption * gas

    let lastPrice = (basicPrice + mileageCity).toFixed(2)

    return lastPrice
  }

  return (
    <div className="Cars-page-container">
      <Header
        page="home"
        LogoHeader={"assets/svg/Logo_Lomotor_v2_letras_white.svg"}
      />
      <div id="cars-index-container" className="img-background-container">
        <img
          src="images/background-cars-page.jpg"
          alt="Img background"
        />
      </div>
      <section>
        <TitlePage
          pretitle={"About us"}
          title={"What We do"}
          paragraph={
            "Driving Excellence: Our Mission, Your Satisfaction"
          }
        />
      </section>
      <div className="seacher-hider-container">
        <FontAwesomeIcon
          className="hideSearcher"
          onClick={() => {
            console.log("funciona");
          }}
          icon={faChevronCircleRight}
        />
      </div>
      <section className="content-cars-container">
        <div
          className={`filters-cars-content-container ${
            showSearcher ? "searcher-shown" : ""
          }`}
        >
          <CarSeacher />
        </div>
        <div className="cars-searcher-container">
          {carModels.map((car) => {
            return (
              <Card
                text1={`${car.make} ${car.model}`}
                img={car.img}
                price={calculePrice(car.fuel_consumption)}
                btnText={"Rent"}
                gas={car.fuel_consumption}
                transmission={car.transmission === 'a' ? "automatic" : "manual"}
                people={car.people}
              />
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
