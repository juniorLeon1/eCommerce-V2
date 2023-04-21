import React from "react";
import "./PriceFilter.css";

const PriceFilter = (props) => {
  const priceHandler = (event) => {
    props.onChangePriceFilter(event.target.value);
  };

  return (
    <div className="price-filter">
      <div className="price-filter__control">
        <label>Price: </label>
        <select className="price-filter__select" value={props.price} onChange={priceHandler}>
          <option value="all">All</option>
          <option value="low">$0 - $50</option>
          <option value="mid">$50 - $100</option>
          <option value="high">$100+</option>
        </select>
      </div>
    </div>
  );
};

export default PriceFilter;
