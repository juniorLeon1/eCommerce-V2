import React from 'react';
import './Button.css'

const Button = () => {

    const handleButton = () => {
        console.log('clicked!')
    };

    return (
        <div>
            <button className='button' onClick={handleButton}>Add to Cart</button>
        </div>
    )
};

export default Button;