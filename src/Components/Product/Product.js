import React from 'react';
import  './Product.css';
import ProductMadeOf from './ProductMadeOf/ProductMadeOf';




const Product = (props) => {

    // Show available shoes sizes 
    const productSize = Object.entries(props.size)
    .map((sizKey, index) => {
        if(sizKey[1] !== 0) {
            return (<div className="ShoeAvailableSize" key={index}>{sizKey[0]}</div>);
        }else {
            return null;
    }})
    

    
    return (
    <div className='ProductCard' key={props.id} onClick={props.clicked}>
        <div className='ImagePlaceholder'><h3 className='PriceTag'>{props.price} $</h3><img className='ProductImage' src={props.image} alt={props.model + ' image'}></img></div>
            <span><h2>{props.brand}</h2></span> <span></span>
            <h3>{props.model}</h3>
        <div>
            {productSize}
        </div>
        <button className='btnShoeMadeOf'>Made off</button>
        <ProductMadeOf
            class={props.class}
            upper={props.madeOf.upper}
            lining={props.madeOf.lining}
            outerSole={props.madeOf.outerSole}
        />
    </div>
    );
    
}

export default Product;

