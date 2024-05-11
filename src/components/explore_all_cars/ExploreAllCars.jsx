import Card from "../cards/Card_1/Card1";
import "./ExploreAllCars.css";
import Button1 from "../buttons/button_1/Button1"

export default function ExploreAllCars() {
  return (
    <section id="explore-section" className="explore-section">
      <div className="title-explore">
        <h1>Explore all cars</h1>
      </div>
      <div className="content">
        <div className="cars-explore">
          <Card
            img={"/images/mansory_5.webp"}
            text1={"Porsche 992 Turbo S by Lomotor"}
            text2={"Explore Porsche"}
            icon={true}
          />
          <Card
            img={"/images/mansory_3.webp"}
            text1={"Mercedes-AMG G63 by Lomotor"}
            text2={"Explore Mercedes"}
            icon={true}
          />
          <Card
            img={"/images/mansory_4.webp"}
            text1={"Mercedes Maybach S680 4MATIC by Lomotor"}
            text2={"Explore Mercedes"}
            icon={true}
          />
        </div>
      </div>
      
      <div className="btn-container-explore">
        <hr />
        <div className="btn-explore">
          <a href="/Cars">
          <Button1 text={"Explore all cars"} />
          </a>
        </div>
      </div>
    </section>
  );
}
