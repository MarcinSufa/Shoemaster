import React from 'react';
import '../CartCount/CartCount.css'

const CartCount = (props) => {

    return (
        <button className='CartCountNum'>{props.count}</button>
    );
}

export default CartCount;