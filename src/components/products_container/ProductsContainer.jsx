import React, { useEffect, useState } from "react";
import Card from "../cards/Card_2/Card2";
import "./ProductsContainer.css";
import products from "../../services/images/products";

export default function ProductsContainer({ countCards, title, children }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(countCards);
  }, []);

  return (
    <div className="product-container">
      <div className="title-product-container">
        <h2>
          {title} ({count})
        </h2>
      </div>

      <div className="products-card-container">{children}</div>
    </div>
  );
}
