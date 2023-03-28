import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home";
import Products from "./pages/Products"
import Contact from "./pages/Contact";
import Cart from "./pages/Cart"
import Error from "./pages/Error";

import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));