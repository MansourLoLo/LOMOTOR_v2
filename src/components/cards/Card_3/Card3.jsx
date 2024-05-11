import "./Card3.css";
import Button1 from "../../buttons/button_1/Button1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";
import {
  faGasPump,
  faUsers,
  faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Card({ img, text1, btnText, price }) {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <div className="card-container">
        <div className="text-card">
          <div className="title-card">
            <h1>{text1}</h1>
          </div>
          <div className="like-container">
            <FontAwesomeIcon
              onClick={() => setLiked(liked ? false : true)}
              className={`heart-icon ${liked ? "solidHeart" : "regularHeart"}`}
              icon={liked ? solidHeart : regularHeart}
            />
          </div>
        </div>

        <div className="img-card-container">
          <img src={img} alt="Img card" />
        </div>

        <div className="info-car">
          <div className="gas-container">
            <FontAwesomeIcon icon={faGasPump} />
            <h3>90 L</h3>
          </div>
          <div className="drive-container">
            <img
              src="/src/assets/svg_icons/volante.svg"
              alt="SVG img steering wheel"
            />
            <h3>Manual</h3>
          </div>
          <div className="passengers-container">
            <FontAwesomeIcon icon={faUsers} />
            <h3>9 People</h3>
          </div>
        </div>
        <div className="rent-car-container">
          <div className="price-car-container">
            <h1>
              {" "}
              ${price}/<span> day </span>
            </h1>
          </div>
          <div className="btn-rent-car-container">
            <Button1 text={btnText} />
          </div>
        </div>
      </div>
    </>
  );
}
