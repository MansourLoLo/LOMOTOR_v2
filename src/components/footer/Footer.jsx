import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import LeafletMap from "../leaflet/LeafletMap";

export default function Footer({
  logoFooter = "/src/assets/svg/Logo_Lomotor_v2_logo_black.svg",
  logoFooterCredits = "/src/assets/svg/Logo_Lomotor_v2_logo_black.svg",
}) {
  return (
    <>
      <footer className="footer">
        <div className="social-media-container">
          <div className="logo-footer-container">
            <img src={logoFooter} alt="img logo LoMotor footer" />
          </div>
          <div className="social-media-icons-container">
            <FontAwesomeIcon className="social-media-icon" icon={faFacebook} />
            <FontAwesomeIcon className="social-media-icon" icon={faInstagram} />
            <FontAwesomeIcon className="social-media-icon" icon={faXTwitter} />
            <a href="https://github.com/MansourLoLo/LOMOTOR_v2">
              <FontAwesomeIcon className="social-media-icon" icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="find-us-container">
          <h2>Find us</h2>
          <div className="map-container-leaflet">
            <LeafletMap coordinates={[19.234933189775774, -103.73096267069738]}/>
          </div>
        </div>
        <div className="suscribe-container">
          <div className="suscribe-title">
            <p> Suscribe to get the latest news</p>
          </div>
          <div className="suscribe-input-container">
            <input
              className="input"
              type="email"
              placeholder="someone@example.com"
            />
            <div className="suscribe-btn">
              <button className="btn">Suscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="license-container">
        <div className="license">
          <hr />
          <div className="policies-container">
            <div className="rights">
              <h4>@ Lomotor 2024. All rights reserved</h4>
            </div>
            <div className="policies">
              <h4> <a href="https://www.brabus.com/en-int/GDPR.html"> Legal notice </a> </h4>
              <h4> <a href="https://www.brabus.com/en-int/GDPR.html"> Privacy Policy </a> </h4>
              <h4> <a href="https://www.brabus.com/en-int/GDPR.html"> Cookie Policy </a> </h4>
            </div>
          </div>
        </div>
        <div className="logo">
          <img src={logoFooterCredits} alt="Logo Credit" />
        </div>
      </div>
    </>
  );
}
