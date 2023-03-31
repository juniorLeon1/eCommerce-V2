import React from "react";
import ServCard from "../Components/Home/ServCard";
import HeroSlider from "../Components/Home/HeroSlider";
import HeroImages from "../Components/Home/HeroImages";
import './Home.css';

const Home = () => {
  return (
    <div>

      <h1 className="heroTitle">We Sell <br/> Tools!</h1>

      <HeroSlider slides={HeroImages} />

      <ServCard />
    </div>
  );
};

export default Home;
