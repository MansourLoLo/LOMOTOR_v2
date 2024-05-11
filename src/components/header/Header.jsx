import React, { useState } from "react";
import "./Header.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faChevronRight,
  faGlobe,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Header({
  LogoNavBar = "/src/assets/svg/Logo_Lomotor_v2_letras_black.svg",
  LogoHeader = "/src/assets/svg/Logo_Lomotor_v2_letras_black.svg",
  page,
}) {
  const [menuSwitcher, setMenu] = useState(false);
  const [cross, showCross] = useState(false);

  const handleClickMenu = () => {
    setMenu(true);
    showCross((page = "Home" ? false : true));
  };
  
  const handleClickNavbar = () => {
    setMenu(false);
  };

  return (
    <>
      <header className="header">
        <div className="menu-container">
          <FontAwesomeIcon
            onClick={handleClickMenu}
            className="icon-header"
            icon={faBars}
          />
        </div>
        <div className="logo-header-container">
          <a href="/Home">
            <img src={LogoHeader} alt="Logo Header Words" />
          </a>
        </div>
        <div className="icons-header-container shown">
          <FontAwesomeIcon className="icon-header" icon={faGlobe} />
          <FontAwesomeIcon className="icon-header" icon={faUser} />
          <FontAwesomeIcon className="icon-header" icon={faBagShopping} />
        </div>
      </header>
      <nav className={menuSwitcher ? "menu-navbar" : "menu-navbar hidden"}>
        <div className="menu-logo">
          <FontAwesomeIcon
            onClick={handleClickNavbar}
            className="icon-menu"
            icon={faXmark}
          />
          <img src={LogoNavBar} alt="Logo Header Words" />
        </div>
        <div className="menu-links-container">

          <details className="menu-link">
            <summary>
              <p><a href="/Home">Home</a></p>
              <FontAwesomeIcon
                className={cross ? "icon-navbar" : "icon-navbar plus"}
                icon={faPlus}
              />
              <FontAwesomeIcon
                className={cross ? "icon-navbar" : "icon-navbar chevronRight"}
                icon={faChevronRight}
              />
            </summary>
            <hr />
            <div className="navBar-links">
              <a onClick={() => setMenu(false)} href="#Index-home">
                <p>Index</p>
              </a>
              <a onClick={() => setMenu(false)} href="#explore-section">
                <p>Explore</p>
              </a>
              <a onClick={() => setMenu(false)} href="#discover-content">
                <p>Discover</p>
              </a>
            </div>
          </details>


          <details className="menu-link">
            <summary>
              <p><a href="/Brand">Brand</a></p>
              <FontAwesomeIcon
                className={cross ? "icon-navbar" : "icon-navbar plus"}
                icon={faPlus}
              />
              <FontAwesomeIcon
                className={cross ? "icon-navbar" : "icon-navbar chevronRight"}
                icon={faChevronRight}
              />
            </summary>
            <hr />
            <div className="navBar-links">
              <a onClick={() => setMenu(false)} href="#brand-video-container">
                <p>Index</p>
              </a>
              <a onClick={() => setMenu(false)} href="#Brand-container">
                <p>What we do</p>
              </a>
            </div>
          </details>


          <details className="menu-link">
            <summary>
              <p><a href="/Cars">Cars</a></p>
              <FontAwesomeIcon
                className={cross ? "icon-navbar" : "icon-navbar plus"}
                icon={faPlus}
              />
              <FontAwesomeIcon
                className={cross ? "icon-navbar" : "icon-navbar chevronRight"}
                icon={faChevronRight}
              />
            </summary>
            <hr />
            <div className="navBar-links">
              <a onClick={() => setMenu(false)} href="#cars-index-container">
                <p>Index</p>
              </a>
              <a onClick={() => setMenu(false)} href="#Cars-component-container">
                <p>Cars</p>
              </a>
              <a onClick={() => setMenu(false)} href="#ECO-component-container">
                <p>ECO</p>
              </a>
              <a onClick={() => setMenu(false)} href="#SUV-component-container">
                <p>SUV</p>
              </a>
              <a onClick={() => setMenu(false)} href="#GPL-component-container">
                <p>GPL</p>
              </a>
              <a onClick={() => setMenu(false)} href="#Comercial-component-container">
                <p>Comercial</p>
              </a>
            </div>
          </details>



        </div>
        <div className="menu-contact-container">
          <div className="menu-contact">
            <p>
              {" "}
              <a href="/Contact"> Contact Us </a>{" "}
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
