import React, { useState } from "react";
import CardInfo from "./CardInfo";
import Button from "./Button";

import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="productContainer">
      {CardInfo.map((info) => {
        return (
          <div className="productCard">
            <img className="productIMG" src={info.image} alt="miter saw" />
            <div className="productText">
              <h3 className="productTitle">{info.title}</h3>
              <p className="productPrice">${info.price}</p>
              <p className="productDesc">{info.desc}</p>
            </div>
            <div className="purchase">
              <Button />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
