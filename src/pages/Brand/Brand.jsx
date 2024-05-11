import "./Brand.css";
import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Carrusel from "../../components/carrusel/Carrusel";
import WhatWeOffer from "../../components/what-we-do/WhatWeOffer";

export default function Brand() {
  return (
    <>
      <Header LogoHeader="/src/assets/svg/Logo_Lomotor_v2_letras_white.svg" />
      <div id="brand-video-container" className="container-video">
        <Carrusel 
        lateralControl={false} 
        dotsControl={false} 
        posVideo={3} />
        <div className="video-title-container">
          <h1> WHO WE ARE </h1>
        </div>
      </div>

      <WhatWeOffer/>


      <Footer />
    </>
  );
}
