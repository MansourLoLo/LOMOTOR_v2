import React, { useState } from "react";
import Card from "../cards/Card_2/Card2";
import "./ProductsContainer.css";
import products from "../../services/images/products";

export default function ProductsContainer({ title }) {
  const [count, setCount] = useState(0);

  return (
    <div className="product-container">
      <div className="title-product-container">
        <p>
          {title} ({count})
        </p>
      </div>

      {/* products[0]["Exhaust system upgrades"] */}

      {
        products.map((category, index) =>{
          console.log("Category: ", category);
        })
      }
      
      <div className="products-card-container">
        <Card
          img={"/public/images/Cars-img/Cars/accent.png"}
          text1={"Exhaust"}
          text2={"$120.99"}
          text3={"6 (reviews)"}
          btnText={"Rent"}
          detailsText={"View Details"}
        />
      </div>
    </div>
  );
}
