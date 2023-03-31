import React, { useEffect, useState } from "react";
import App from '../App'
import ProductCard from "../Components/Products/ProductCard";

function Products(props) {
    return (
        <div>
            <App />

            <ProductCard />
        </div>
    )
}

export default Products;