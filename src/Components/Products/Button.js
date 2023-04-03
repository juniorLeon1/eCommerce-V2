import React from 'react';
// import { useState } from 'react';
import './Button.css';

const Button = (props) => {

    // const [productArr, setProductArr] = useState([])
    const handleButton = () => {
        console.log(props.buttonVal)
    };

    return (
        <div>
            <button className='button' onClick={handleButton}>Add to Cart</button>
        </div>
    )
};

export default Button;