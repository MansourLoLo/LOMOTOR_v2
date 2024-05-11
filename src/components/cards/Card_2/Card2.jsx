import "./Card2.css";
import Button1 from "../../buttons/button_1/Button1";

export default function Card({
  img,
  text1,
  text2,
  text3,
  btnText,
  detailsText,
}) {
  return (
    <>
      <div className="card2-container">
        <div className="img-card-container">
          <img src={img} alt="Img card" />
        </div>

        <div className="text-card2-container">
          <div className="title-card">
            <h1>{text1}</h1>
          </div>
          <div className="subtext-card">
            <h3>{text2}</h3>
          </div>
        </div>
        <div className="card-price-container">
          <div className="reviews">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path d="M12 0l3.09 8.72 8.28.06c.23.01.32.31.15.46l-6.3 5.3 2.34 8.09c.08.28-.23.52-.46.36l-7.3-4.72-7.3 4.72c-.23.15-.54-.08-.46-.36l2.34-8.09-6.3-5.3c-.18-.15-.08-.45.15-.46l8.28-.06 3.09-8.72z" />
            </svg>
            <h5>{text3}</h5>
          </div>
          <div className="btn-card">
            <div className="btn-container">
              <Button1 text={btnText} />
            </div>
            <div className="details-container">
              <h4>{detailsText}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
