import React, { Component } from 'react';
import './Cart.css';
import axios from '../../axios-products';
import Spinner from "../UI/Spinner/Spinner";
import emptyCartImg from '../../assets/images/empty.png';
import CartCount from "./CartCount/CartCount";


class Cart extends Component {

state= {
    Cart: [],
    loading: false,
    error: false,
    fullPrice: null,
    ProductCount: null
}

handleDelete = (event) => {
    event.preventDefault();
    this.setState ({loading: true});
    let cartProductId = event.currentTarget.value;
    axios.delete(`/Cart/${cartProductId}.json`)
        .then(res => {
            this.setState({loading: false});
            this.componentDidMount();
        })
        .catch (error => {
            this.setState({loading: false});
        })
    }

cartCountHandler = () => {
    let cartProductsNum = (Object.keys(this.state.Cart).length);
    this.setState({ProductCount: cartProductsNum});
}   

goToCheckout = (event) => {
    event.preventDefault();
    this.props.history.replace('/Checkout');  
}

componentDidMount () {
    this.setState({loading: true});
    axios.get( '/Cart.json' )
    .then( response => {
        this.setState( { Cart: response.data, loading: false } );
    })
    .then( this.fullPriceHandler)
    .then( this.cartCountHandler)
    .catch( error => {
        this.setState( { error: error, loading: false } );
    } );
} 

// Calculating full price of Cart
fullPriceHandler = () => {
    let allCartPrices = Object.values(this.state.Cart);
    let fullPrice= 0;
    for (let i = 0; i < allCartPrices.length; i++) {
        fullPrice += allCartPrices[i].price;
    }
    this.setState({fullPrice: fullPrice});
}

    render() {
        let cartCountNum = null;
        let printCartProducts = null;
        let  fullCartPrice =null;
        let checkoutBtn = null;

        if(this.state.loading) {
            return <Spinner/>
        }  else if (this.state.Cart !== null) {
            fullCartPrice = <h3>Total Price: {this.state.fullPrice} $</h3>
            cartCountNum = <CartCount count = {this.state.ProductCount} />
            printCartProducts = (Object.entries(this.state.Cart).map((shoes) => {
                return (
                <React.Fragment>
                <div className='ProductInCart'> 
                <div className='cartProductDelete ' key={shoes[0]}><img className='SmallProductImage' src={shoes[1].image} alt='nike shoes'></img></div>
                    <div className='CartProductInfo'><h4>Brand</h4><p>{shoes[1].brand}</p></div>
                    <div className='CartProductInfo'><h4>Model</h4><p>{shoes[1].model}</p></div>
                    <div className='CartProductInfo'><h4>Quantity</h4><p>{shoes[1].quantity}</p></div>
                    <div className='CartProductInfo'><h4>Size</h4><p>{shoes[1].size}</p> </div>
                    <div className='CartProductInfo'><h4>Price</h4><p>{shoes[1].price}$</p> </div>
                    <div className='cartProductDelete'><button className='cartProductDeleteBtn'  value={shoes[0]} onClick={ this.handleDelete} >Delete</button></div>
                </div>                 
                </React.Fragment>
                );
            }));
            checkoutBtn = <button className='goToCheckout' onClick={ this.goToCheckout}> Checkout </button>
        } else  {
            printCartProducts= (
                <div>
                <h3> is Empty</h3>
                <img className="ImageEmptyCart" src={emptyCartImg} alt="empty cart"></img>
                </div>
            )
        } 
        return (
            <div className='CartBox'>
            <h1>Your Cart</h1>
            <div className='CartWrapper'>
                <div >
                {printCartProducts}
                </div>                
            </div>
                {fullCartPrice}
                {checkoutBtn}
                {cartCountNum}
        </div>
        );
    }  
}

export default Cart;