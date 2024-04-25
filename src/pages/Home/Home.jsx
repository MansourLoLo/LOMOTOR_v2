import "./Home.css";
import Header from "../../components/header/Header";
import videos from "../../services/video/brabus-cars/BrabusCars";
import Footer from "../../components/footer/Footer";
import ExploreAllCars from "../../components/explore_all_cars/ExploreAllCars";
import DiscoverBentoGrids from "../../components/discover-bento-grids/DiscoverBentoGrids";
import Carrusel from '../../components/carrusel/Carrusel';
import CarsList from "../../components/car-list/CarsList";

function Home() {

  return (
    <>
      <Header
        page="home"
        LogoHeader={"/src/assets/svg/Logo_Lomotor_v2_letras_white.svg"}
        LogoNavBar={"/src/assets/svg/Logo_Lomotor_v2_letras_black.svg"}
      />

      <div className="container-video">
      {/* playsInline preload="none" muted loop autoPlay */}
       <Carrusel  posVideo={0}/>
      </div>


      {/* Porque el boton sube cuando tiene que estar quieto con un position absolute */}
      <ExploreAllCars />

      <DiscoverBentoGrids/>

      <CarsList />
      <Footer />
    </>
  );
}

export default Home;
