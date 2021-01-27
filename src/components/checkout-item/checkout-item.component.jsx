import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = () => (
    <div className='chechout-item'>
        <div className='image-container'>
            <img alt='item' />
        </div>
        <span className='name'></span>
        <span className='quantiy'></span>
        <span className='price'></span>
        <span className='remove-button'>&#x274C;</span>
    </div>
)