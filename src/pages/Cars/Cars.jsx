import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./Cars.css";
import Header from "../../components/header/Header";
import Card from "../../components/cards/Card_3/Card3";
import Footer from "../../components/footer/Footer";
import CarSeacher from "../../components/Car_searcher/CarSeacher";
import TitlePage from "../../components/Title-pages/title-page_1/TitlePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Cars() {
  const [type, setType] = useState("All");

  const handleClickFilter = (typeParam) => {
    setType(typeParam);
  };

  const [showSearcher, SetshowSearcher] = useState(false);

  return (
    <div className="Cars-page-container">
      <Header
        page="home"
        LogoHeader={"/src/assets/svg/Logo_Lomotor_v2_letras_white.svg"}
      />
      <div id="cars-index-container" className="img-background-container">
        <img
          src="/public/images/background-cars-page.jpg"
          alt="Img background"
        />
      </div>
      <section>
        <TitlePage
          pretitle={"About us"}
          title={"What We do"}
          paragraph={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sequi!"
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
          <Card
            text1={"Nissan GTR R34"}
            img={"/public/images/Cars-img/SUV/creta.png"}
            price={"99.00"}
            btnText={"Rent"}
          />
          <Card
            text1={"Nissan GTR R34"}
            img={"/public/images/Cars-img/SUV/creta.png"}
            price={"99.00"}
            btnText={"Rent"}
          />
          <Card
            text1={"Nissan GTR R34"}
            img={"/public/images/Cars-img/SUV/creta.png"}
            price={"99.00"}
            btnText={"Rent"}
          />
          <Card
            text1={"Nissan GTR R34"}
            img={"/public/images/Cars-img/SUV/creta.png"}
            price={"99.00"}
            btnText={"Rent"}
          />
        </div>
      </section>

      <Footer />
      
    </div>
  );
}
