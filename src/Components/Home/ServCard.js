import React from 'react';
import { Link } from "react-router-dom";

import Home from '../../pages/Home'

import './ServCard.css';


const AboutCard = (props) => {
    return (
        <div className='cardContainer'>

            <div className='card' >
                <img className="cardIMG" src='https://cdn-icons-png.flaticon.com/128/769/769198.png' alt="large toolset" />
                <div className="cardText">
                    <h3 className="cardTitle">Service</h3>
                    <p className="cardDesc">We'll get your tools back into good condition by inspecting, cleaning, and repairing.</p>
                </div>
            </div>

            <Link to='/contact' className='card middle' >
                <img className="cardIMG" src='https://cdn-icons-png.flaticon.com/128/2967/2967892.png' alt="large toolset" />
                <div className="cardText">
                    <h3 className="cardTitle">Contact us!</h3>
                    <p className="cardDesc">Click here to contact us if you need any help or have any questions.</p>
                </div>
            </Link>
            
            <div className='card' >
                <img className="cardIMG" src='https://cdn-icons-png.flaticon.com/128/9160/9160750.png' alt="large toolset" />
                <div className="cardText">
                    <h3 className="cardTitle">Warranty</h3>
                    <p className="cardDesc">We guarantee the quality and performance of our products or services for life through our lifetime warranty.</p>
                </div>
            </div>

        </div>
    )
};

export default AboutCard;