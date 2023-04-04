import React from "react";
import "./TypeFilter.css";

const TypeFilter = (props) => {
  const typeHandler = (event) => {
    props.onChangeTypeFilter(event.target.value);
  };

  return (
    <div className="type-filter">
      <div className="type-filter__control">
        <label>Type: </label>
        <select value={props.type} onChange={typeHandler}>
          <option value="all">All</option>
          <option value="static">Stationary</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>
    </div>
  );
};

export default TypeFilter;
