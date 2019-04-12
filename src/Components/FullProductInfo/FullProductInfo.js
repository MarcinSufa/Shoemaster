import React from 'react';
import  './FullProductInfo.css';




const FullProductInfo = (props) => {
  
    
    return (
        <React.Fragment>
    <div className='FullProductCard' >
        <div className='FullProductLeft'>
        <img className='FullProductImage' src={props.image} alt='nike shoes'></img>
        </div>
        <div className="FullProductRigth">
            <h1>{props.id}</h1>
            <div ><h3 className='FullPriceTag'>{props.price} $</h3></div>
            <span><h2>{props.brand}</h2></span> <span></span>
            <h3>{props.model}</h3>
            <div>
            </div>
            <button >Made off:</button>
            <h3>Add To cart</h3>
        <hr></hr>
        <span><button>-</button></span> <span><button>+</button></span>

        </div>
    </div>
    </React.Fragment>
    );
    
}

export default FullProductInfo;

