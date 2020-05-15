import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({
    item: { imageUrl, precio, nombre, quantity },
}) => {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='' />
            <div className='item-details'>
                <span className='name'>{nombre}</span>
                <span className='price'>
                    {precio} x {quantity}
                </span>
            </div>
        </div>
    );
};

export default CartItem;
