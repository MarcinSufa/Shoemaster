import React from 'react';
import  './CartProductList.modules.css';
import Button from '../../UI/Button/Button';




const CartProductList = (props) => {
    
    return (
        <div className='ProductInCart' key={props.id}  onClick={props.clicked}> 
        <div className='cartProductDelete' ><img className='SmallProductImage' src={props.image} alt={props.alt}></img></div>
            <div className='CartProductInfo'><h4>Brand</h4><p>{props.brand}</p></div>
            <div className='CartProductInfo'><h4>Model</h4><p>{props.model}</p></div>
            <div className='CartProductInfo'><h4>Quantity</h4><p>{props.quantity}</p></div>
            <div className='CartProductInfo'><h4>Size</h4><p>{props.size}</p> </div>
            <div className='CartProductInfo'><h4>Price</h4><p>{props.price}$</p> </div>
            <div className='cartProductDelete'><Button btnType={props.btnType} value={props.id} clicked={props.onClick}>Delete</Button></div>
        </div> 
    );
    
}

export default CartProductList;