import React, { useEffect, useState } from "react";
import "./ProductCards.css";
import Button from "./Button";
import PriceFilter from "./PriceFilter";
import TypeFilter from "./TypeFilter";

const ProductCards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  const [filteredPrice, setFilteredPrice] = useState("all");
  const priceFilterHandler = (priceRange) => {
    setFilteredPrice(priceRange);
  };

  const [filteredType, setFilteredType] = useState("all");
  const typeFilterHandler = (typeRange) => {
    setFilteredType(typeRange);
  };

  const filteredProducts = data.filter((data) => {
    if (filteredPrice === "all" && filteredType === "all") {
      return data;
    } else if (filteredPrice === "all" && filteredType === "static") {
      return data.prod_Type === "static";
    } else if (filteredPrice === "all" && filteredType === "mobile") {
      return data.prod_Type === "mobile";
    } else if (filteredPrice === "low" && filteredType === "all") {
      return data.filtered_Price === "low";
    } else if (filteredPrice === "mid" && filteredType === "all") {
      return data.filtered_Price === "mid";
    } else if (filteredPrice === "high" && filteredType === "all") {
      return data.filtered_Price === "high";
    } else {
      return (
        data.filtered_Price === filteredPrice && data.prod_Type === filteredType
      );
    }
  });

  return (
    <div className="background-card">
      <div className="header">
        <h1>{filteredProducts.length} Results</h1>
        <div className="filters">
          <PriceFilter
            price={filteredPrice}
            onChangePriceFilter={priceFilterHandler}
            className="price-filter"
          />
          <TypeFilter
            type={filteredType}
            onChangeTypeFilter={typeFilterHandler}
            className="type-filter"
          />
        </div>
      </div>

      <div className="productContainer">
        {filteredProducts.map((info) => {
          return (
            <div className="productCard" key={info.ID}>
              <img className="productIMG" src={info.img} alt={info.prod_Name} />
              <div className="productText">
                <h3 className="productTitle">{info.prod_Name}</h3>
                <p className="productPrice">${info.price}</p>
                <p className="productDesc">{info.prod_Desc}</p>
              </div>
              <div className="purchase">
                <Button buttonVal={info.ID} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCards;