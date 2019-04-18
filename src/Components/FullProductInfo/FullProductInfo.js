import React, { Component } from 'react';
import  './FullProductInfo.css';
import axios from '../../axios-products';
import { withRouter } from 'react-router-dom';

class FullProductInfo extends Component {

    state= {
        quantity: null,
        id: null,
        size: null, 
        price: null,
        image: null,
        addedToCart: false
    }


    addToCartHandler = (selectedShoeId, selectedShoePrice, selectedShoeImg) => {
        if (this.state.size) {
            let newState = { ...this.state};
            newState.quantity = 1; 
            newState.id = selectedShoeId;
            newState.price = selectedShoePrice;
            newState.image = selectedShoeImg;
            this.setState({quantity: newState.quantity, id: newState.id, price: newState.price, addedToCart: true, image: newState.image}, () => {
                // console.log('your order is' + this.state.id + " and " + this.state.size + " the price is " + this.state.price)
                const cartProduct = {
                    id: this.state.id, 
                    size: this.state.size,
                    quantity: this.state.quantity,
                    price: this.state.price,
                    image: this.state.image
                }
                axios.post( '/Cart.json', cartProduct )
                .then( response => this.props.history.replace('/Cart')) 
                .catch( error => console.log(error));
            });
        } else {
            alert('Please select your size!');
        }
        console.log(this.state.id);
        // alert('your order is' + this.state.id + " and " + this.state.size + " the price is " + this.state.price);
        console.log(selectedShoeId);
    }

    selectSizeHandler = (sizKey) => {
        this.setState({size: sizKey[0]});
        console.log(this.state.size);
    }
    
    render () {
        const productSize = Object.entries(this.props.size)
        .map((sizKey, i) => {
            if(sizKey[1] === 0) {
            return (<button className="ShoeNotAvailableSize" disabled key={i} >{sizKey[0]}</button>);
            }else {
             let checkIfClicked = this.state.size === sizKey[0]? 'ShoeAvailableSizeBtnActive': 'ShoeAvailableSizeBtn' //  Dynamically change Css class if button clicked
            return (<button className={checkIfClicked} onClick={() => {this.selectSizeHandler(sizKey)}} key={i} >{sizKey[0]}</button>);
        }}) 

        let selectedShoeId = this.props.id;
        let selectedShoePrice = this.props.price;
        let selectedShoeImg = this.props.image;

        let addToCartBtn = (
            <button className="AddToCartBtn" onClick={() => this.addToCartHandler(selectedShoeId, selectedShoePrice, selectedShoeImg)}>Add to Cart</button>
        )

    return (
        <React.Fragment> 
    <div className='FullProductCard' >
        <div className='FullProductLeft'>
        <img className='FullProductImage' src={this.props.image} alt='nike shoes'></img>
        </div>
        <div className="FullProductRigth">
            <h1>{this.props.brand}</h1>
            <span><h2>{this.props.model}</h2></span>   
            <h4>Product id: {this.props.id} </h4>
            <p>{this.props.description}</p>
            <br />
            <div ><h3 className='FullPriceTag'>{this.props.price} $</h3></div>
            <br />
            <div>
            </div>
            <button >Made off:</button>
            <h3>Chose your size</h3>
            {productSize }
        <hr></hr>
            {addToCartBtn}

        </div>
    </div>
    </React.Fragment>
    );
    }   
}

export default withRouter (FullProductInfo);
