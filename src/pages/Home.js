import React from "react";
import ServCard from "../Components/Home/ServCard";
import HeroSlider from "../Components/Home/HeroSlider";
import HeroImages from "../Components/Home/HeroImages";

const Home = () => {
  return (
    <div>
      <HeroSlider slides={HeroImages} />

      <ServCard />
    </div>
  );
};

export default Home;
