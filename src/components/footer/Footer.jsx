import "./Footer.css";
import React from "react";
import Button1 from "../buttons/button_1/Button1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faStackOverflow
} from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons"
import LeafletMap from "../leaflet/LeafletMap";

export default function Footer({
  logoFooter = "assets/svg/Logo_Lomotor_v2_logo_black.svg",
  logoFooterCredits = "assets/svg/Logo_Lomotor_v2_logo_black.svg",
}) {
  return (
    <>
      <footer className="footer">
        <div className="social-media-container">
          <div className="logo-footer-container">
            <a href="/Home">
              <img src={logoFooter} alt="img logo LoMotor footer" />
            </a>
          </div>
          <div className="social-media-icons-container">
            <a href="https://www.linkedin.com/in/mansour-lo-lo-5a7978292/">
              <FontAwesomeIcon
                className="social-media-icon"
                icon={faLinkedin}
              />
            </a>
            <a href="https://twitter.com/">
              <FontAwesomeIcon
                className="social-media-icon"
                icon={faXTwitter}
              />
            </a>
            <a href="https://stackoverflow.com/">
              <FontAwesomeIcon
                className="social-media-icon"
                icon={faStackOverflow}
              />
            </a>
            <a href="https://github.com/MansourLoLo/LOMOTOR_v2">
              <FontAwesomeIcon className="social-media-icon" icon={faGithub} />
            </a>
            <a href="RSS/rss.xml">
              <FontAwesomeIcon className="social-media-icon icon-rss" icon={faRss} />
            </a>
          </div>
        </div>
        <div className="find-us-container">
          <h2>Find us</h2>
          <div className="map-container-leaflet">
            <LeafletMap
              coordinates={[19.234933189775774, -103.73096267069738]}
            />
          </div>
        </div>
        <div className="suscribe-container">
          <div className="suscribe-title">
            <p> Suscribe to the latest news</p>
          </div>
          <div className="suscribe-input-container">
            <input
              className="input"
              type="email"
              placeholder="someone@example.com"
            />
            <div className="suscribe-btn">
              <Button1 text={"Suscribe"} />
            </div>
          </div>
        </div>
      </footer>
      <div className="license-container">
        <div className="license">
          <hr />
          <div className="policies-container">
            <div className="rights">
              <h4>Lomotor 2024. All rights reserved  &copy;</h4>
            </div>
            <div className="policies">
              <h4>
                {" "}
                <a href="https://www.brabus.com/en-int/GDPR.html">
                  {" "}
                  Legal notice{" "}
                </a>{" "}
              </h4>
              <h4>
                {" "}
                <a href="https://www.brabus.com/en-int/GDPR.html">
                  {" "}
                  Privacy Policy{" "}
                </a>{" "}
              </h4>
              <h4>
                {" "}
                <a href="https://www.brabus.com/en-int/GDPR.html">
                  {" "}
                  Cookie Policy{" "}
                </a>{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="logo">
          <a href="/Home">
            <img src={logoFooterCredits} alt="Logo Credit" />
          </a>
        </div>
      </div>
    </>
  );
}
