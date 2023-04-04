import React, { useState, useEffect } from "react";
import { CartArray } from "../Products/Button";
// import Cart from "../../pages/Cart";

const AddedCard = () => {
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

  const addedToCart = data.filter((data) => {
    return data.ID === CartArray[0]
  })

  return (
    <div>
      {addedToCart.map((info) => {
        return (
            <h1>{info.prod_Name}</h1>
        )
      })}
    </div>
  );
};

export default AddedCard;
