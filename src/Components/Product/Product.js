import React from 'react';
import  './Product.css';




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
    <div className='ProductCard' onClick={props.clicked}  >
        <div className='ImagePlaceholder'><h3 className='PriceTag'>{props.price} $</h3><img className='ProductImage' src={props.image} alt='nike shoes'></img></div>
        <span><h2>{props.brand}</h2></span> <span></span>
        <h3>{props.model}</h3>
        <div>
        {productSize}
        </div>
        <button className='btnShoeMadeOf'>Made off:</button>
        <div className='ShoeMaterials' >
            <span>upper: <div className="ShoeAvailableSize" >{props.madeOf.upper}</div></span>
            <span>lining:<div className="ShoeAvailableSize" >{props.madeOf.lining}</div> </span>
            <span>outerSole:<div className="ShoeAvailableSize" >{props.madeOf.outerSole}</div> </span>
        </div>
    </div>
    );
    
}

export default Product;

