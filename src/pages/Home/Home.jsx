import "./Home.css";
import Header from "../../components/header/Header";
// import videos from "../../services/video/brabus-cars/BrabusCars";
import Footer from "../../components/footer/Footer";
import ExploreAllCars from "../../components/explore_all_cars/ExploreAllCars";
import DiscoverBentoGrids from "../../components/discover-bento-grids/DiscoverBentoGrids";
import Carrusel from "../../components/carrusel/Carrusel";
import Hero from "../../components/hero/Hero";

function Home() {
  return (
    <>
      <Header
        page="home"
        LogoHeader={"/src/assets/svg/Logo_Lomotor_v2_letras_white.svg"}
        LogoNavBar={"/src/assets/svg/Logo_Lomotor_v2_letras_black.svg"}
      />

      {/* <div id="container-video" className="container-video">
        <videos />
      </div> */}
      <section id="Index-home">
        <Hero
          preTitle={""}
          title={`We have Everything \n Your <span> Car </span> Need`}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero nulla sit ipsam reprehenderit nostrum dolorum maxime maiores, rerumdistinctio."
          }
          textBtn={"Discover now"}
          imgUrl={"/images/Cars-img/Cars/veloster.png"}
          reversed={false}
          backgroundImg={true}
        />
      </section>

      <DiscoverBentoGrids />

      <Hero
        preTitle={"About Us"}
        title={"Cheap Price With \n Quality Cars"}
        subtitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero nulla sit ipsam reprehenderit nostrum dolorum maxime maiores, rerumdistinctio."
        }
        textBtn={"Discover now"}
        imgUrl={"/images/Cars-img/ECO/ioniq.png"}
        reversed={true}
        backgroundImg={false}
      />

      {/* Porque el boton sube cuando tiene que estar quieto con un position absolute */}
      <ExploreAllCars />
      <Footer />
    </>
  );
}

export default Home;
