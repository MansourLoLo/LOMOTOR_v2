import "./Home.css";
import Header from "../../components/header/Header";
// import videos from "../../services/video/brabus-cars/BrabusCars";
import Footer from "../../components/footer/Footer";
import ExploreAllCars from "../../components/explore_all_cars/ExploreAllCars";
import DiscoverBentoGrids from "../../components/discover-bento-grids/DiscoverBentoGrids";
import Carrusel from "../../components/carrusel/Carrusel"
import Hero from "../../components/hero/Hero";

function Home() {
  return (
    <>
      <Header
        page="home"
        LogoHeader={"assets/svg/Logo_Lomotor_v2_letras_white.svg"}
        LogoNavBar={"assets/svg/Logo_Lomotor_v2_letras_black.svg"}
      />

      {/* <div id="container-video" className="container-video">
        <videos />
      </div> */}
      <section id="Index-home">
        <Hero
          preTitle={""}
          title={`We have Everything\n Your Car Needs`}
          subtitle={
            "Discover the Ultimate Destination for Your Automotive Dreams: Unveiling a Vast Array of Car Essentials and Accessories Tailored to Your Every Need!"
          }
          textBtn={"Discover now"}
          imgUrl={"assets/svg/hero-images/car_1.png"}
          reversed={false}
          backgroundImg={true}
        />
      </section>

      <DiscoverBentoGrids />

      <Hero
        preTitle={"About Us"}
        title={"Cheap Price With Quality Cars"}
        subtitle={
          "Unlock Unbeatable Deals: Where Quality Meets Affordability - Explore Our Impressive Selection of High-Quality Cars at Unbeatable Prices!"
        }
        textBtn={"Discover now"}
        imgUrl={"/public/assets/svg/hero-images/car_2.png"}
        reversed={true}
        backgroundImg={false}
      />

      <ExploreAllCars />
      <Footer />
    </>
  );
}

export default Home;
