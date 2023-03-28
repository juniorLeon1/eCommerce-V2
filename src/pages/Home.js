import React from 'react';
import HeroSlider from '../Components/Home/HeroSlider';
import SliderData from '../Components/Home/SliderData';

const Home = () => {
    return (
        <div>
            <HeroSlider slides={SliderData} />
        </div>
    )
}

export default Home;