import "./WhatWeOffer.css";
import ProductsContainer from "../products_container/ProductsContainer";
import TitlePage from "../Title-pages/title-page_1/TitlePage";
import Card from "../cards/Card_2/Card2";
import productsArray from "../../services/images/products";
import { useEffect, useState } from "react";

export default function WhatWeOffer() {


  return (
    <section id="Brand-container" className="Brand-container">
      <TitlePage
        pretitle={"About us"}
        title={"What We Offer"}
        paragraph={
          "Discover Your Dream Ride: Our Exclusive Selection"
        }
      />

      <div className="Brand-products-container">
        {productsArray.map((item, index) => (
          <ProductsContainer
            countCards={item.products.length}
            key={index}
            title={item.category.replace(/_/g, " ")}
          >
            {item.products.map((product, index) => {
              let rotateWheel = item.category == "Wheels_and_tyres" ? true : false 
              return (
                <Card
                  key={index}
                  img={`/images/products/${item.category}/${product.img}`}
                  imgWheel={rotateWheel}
                  text1={product.name}
                  text2={`$${product.price}`}
                  text3={`${product.reviews} (reviews)`}
                  stars={product.stars}
                  btnText={"Rent"}
                  detailsText={"View Details"}
                />
              );
            })}
          </ProductsContainer>
        ))}
      </div>

    </section>
  );
}