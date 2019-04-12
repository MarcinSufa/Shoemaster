import React from 'react';
import  './Product.css';




const Product = (props) => {
    const productSize = Object.keys(props.size)
    .map(sizKey => {
        return (<div className="ShoeAvailableSize" >{sizKey}</div>);
           })
    
    return (
    <div className='ProductCard' onClick={props.clicked}  >
        <div className='ImagePlaceholder'><h3 className='PriceTag'>{props.price} $</h3><img className='ProductImage' src={props.image} alt='nike shoes'></img></div>
        <span><h2>{props.brand}</h2></span> <span></span>
        <h3>{props.model}</h3>
        <div>
        {productSize}
        </div>
        <button className='btnShoeMadeOf'>Made off:</button>
        <div className='ShoeMaterials'>
            <span>upper: <div className="ShoeAvailableSize" >{props.madeOf.upper}</div></span>
            <span>lining:<div className="ShoeAvailableSize" >{props.madeOf.lining}</div> </span>
            <span>outerSole:<div className="ShoeAvailableSize" >{props.madeOf.outerSole}</div> </span>
        </div>
    </div>
    );
    
}

export default Product;

