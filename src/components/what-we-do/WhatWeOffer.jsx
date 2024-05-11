import "./WhatWeOffer.css";
import ProductsContainer from "../products_container/ProductsContainer";
import TitlePage from "../Title-pages/title-page_1/TitlePage";

export default function WhatWeOffer() {
  return (
    <section id="Brand-container" className="Brand-container">
      <TitlePage
          pretitle={"About us"}
          title={"What We Offer"}
          paragraph={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sequi!"
          }
        />

      <div className="Brand-products-container">
        <ProductsContainer title="Exhaust system upgrades" />
        <ProductsContainer title="Intake upgrades" />
        <ProductsContainer title="Engine tuning" />
        <ProductsContainer title="Suspension upgrades" />
        <ProductsContainer title="Brake upgrades" />
        <ProductsContainer title="Wheels and tires" />
        <ProductsContainer title="Body modifications" />
        <ProductsContainer title="Interior upgrades" />
        <ProductsContainer title="Performance accessories" />
        <ProductsContainer title="Aerodynamic enhancements" />
        <ProductsContainer title="Drivetrain upgrades" />
        <ProductsContainer title="Exterior lighting" />
      </div>
    </section>
  );
}
