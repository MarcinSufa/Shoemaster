import React, { Component } from 'react';
import './Checkout.css';
import axios from '../../axios-products';
import Spinner from "../../Components/UI/Spinner/Spinner";

class Checkout extends Component {

    state= {
        Order: [],
        loading: false,
        error: false,
        checkoutPrice: null
    }
    

    componentDidMount () {
        this.setState({loading: true});
        axios.get( '/Cart.json' )
        .then( response => {
            this.setState( { Order: response.data, loading: false });
        })
        .then( this.fullPriceCheckout)
        .catch( error => {
            this.setState( { error: error, loading: false } );
        })
    } 
    
    fullPriceCheckout = () => {
    let allCartPrices = Object.values(this.state.Order);
    let fullPrice= 0;
    for (let i = 0; i < allCartPrices.length; i++) {
        fullPrice += allCartPrices[i].price;
    }
    console.log(fullPrice);
    this.setState({checkoutPrice: fullPrice});
    }


    render ()  {
        // let orderPrice = <h3>{Object.values(this.state.checkoutPrice)}</h3>
        let orderPrice = null;
        if(this.state.loading) {
            return <Spinner/> 
        }
        else if(this.state.checkoutPrice) {
            orderPrice = <h3>{this.state.checkoutPrice} $</h3>
        }
        return (
            <div>
                <h1>Checkout</h1>
                <hr></hr>
                <h3>Your Order info</h3>
                <h3>Order Price: {orderPrice} </h3>
                <p>Product list</p>
                <form>
                    <h3>Contact Data</h3>
                    <label>Name</label>
                    <input></input>
                    <label>Last Name</label>
                    <input></input>
                    <label>Address</label>
                    <input></input>
                </form>
            </div>
        );
    }
}

export default Checkout;