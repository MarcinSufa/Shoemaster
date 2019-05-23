import React from 'react';
import  './ProductMadeOf.modules.css';


const ProductMadeOf = (props) => {

    return (
        <div className={props.class} >
            <span>upper: <div className="ShoeAvailableSize" >{props.upper}</div></span>
            <span>lining:<div className="ShoeAvailableSize" >{props.lining}</div> </span>
            <span>outerSole:<div className="ShoeAvailableSize" >{props.outerSole}</div> </span>
        </div>
    
    );
    
}

export default ProductMadeOf;

