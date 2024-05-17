import Card from "../cards/Card_1/Card1";
import "./ExploreAllCars.css";
import Button1 from "../buttons/button_1/Button1";
import CarsList from "../car-list/CarsList";

export default function ExploreAllCars() {
  const cars = CarsList();

  const carsShown = () => {
    if (cars.length === 0) {
      return null; // Si no hay coches, no se muestra nada
    }

    const randomPositions = [];
    const maxCardsToShow = Math.min(3, cars.length);

    while (randomPositions.length < maxCardsToShow) {
      const randomPos = Math.floor(Math.random() * cars.length);
      if (!randomPositions.includes(randomPos)) {
        randomPositions.push(randomPos);
      }
    }

    return randomPositions.map((pos) => (
      <Card
        key={pos}
        img={cars[pos].img}
        text1={`${cars[pos].make} ${cars[pos].model}`}
        text2={`Explore ${cars[pos].make} ${cars[pos].model}`}
        icon={true}
      />
    ));
  };

  return (
    <section id="explore-section" className="explore-section">
      <div className="title-explore">
        <h1>Explore all cars</h1>
      </div>
      <div className="content">
        <div className="cars-explore">
          {carsShown()}
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
