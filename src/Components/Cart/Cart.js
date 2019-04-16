import React, { Component } from 'react';
import './Cart.css';
import axios from '../../axios-products';
import Spinner from "../UI/Spinner/Spinner";


class Cart extends Component {

state= {
    Cart: [],
    loading: false
}

componentDidMount () {
    this.setState({loading: true});
    axios.get( '/Cart.json' )
    .then( response => {
        this.setState( { Cart: response.data, loading: false } );
    } )
    .catch( error => {
        this.setState( { error: true, loading: false } );
    } );
}

    render() {
let printCartProducts = null;
        if(this.state.loading) {
            return <Spinner/>
        } else {
            printCartProducts = (Object.values(this.state.Cart).map((shoes, index) => {
                return (
                <React.Fragment>
                <div><img className='SmallProductImage' src={shoes.image} alt='nike shoes'></img></div>
                    <div><h4>Quantity</h4><p>{shoes.quantity}</p></div>
                    <div><h3>Product ID :</h3><p>{shoes.id}</p></div>
                    <div><h3>Size{shoes.size}</h3> </div>
                    <div><h3>Price{shoes.price}</h3></div>
                    
                    <hr/>
                </React.Fragment>
                );
            }));
        } 


        return (
            <div>
            <h1>Your Cart</h1>
            <div>
                    {printCartProducts}
                <hr></hr>
            </div>
            <button> Checkout</button>
        </div>
        );
    }  
}

export default Cart;