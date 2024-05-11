import React from "react";
import "./Hero.css";
import Button1 from "../buttons/button_1/Button1";

export default function Hero({
  preTitle,
  title,
  subtitle,
  textBtn,
  imgUrl,
  reversed = false,
  backgroundImg = false,
}) {
  if (reversed) {
    return (
      <section className="hero-section">
        <div className="reversed-img-container">
          <div className="img-container">
            <img src={imgUrl} alt="Image of hero" />
          </div>
          <div className={backgroundImg ? "background-img" : ""}></div>
        </div>

        <div className="hero-content">
          <div className="preTitle">
            <h4>{preTitle}</h4>
          </div>
          <div className="hero-title">
            <h1>{title}</h1>
          </div>
          <div className="hero-subtitle">
            <p>{subtitle}</p>
          </div>
          <div className="hero-btn">
            <Button1 text={textBtn} />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="hero-section">
        <div className="hero-content">
          <div className="preTitle">
            <h4>{preTitle}</h4>
          </div>
          <div className="hero-title">
            <h1>{title}</h1>
          </div>
          <div className="hero-subtitle">
            <p>{subtitle}</p>
          </div>
          <div className="hero-btn">
            <Button1 text={textBtn} />
          </div>
        </div>

        <div className="hero-img-container">
          <div className="img-container">
            <img src={imgUrl} alt="Image of hero" />
          </div>
          <div className={backgroundImg ? "background-img" : ""}></div>
        </div>
      </section>
    );
  }
}
