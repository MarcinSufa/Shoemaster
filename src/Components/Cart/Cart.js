import React, { Component } from 'react';
import './Cart.css';



class Cart extends Component {



    render() {


        return (
            <div>
            <h1>Your Cart</h1>
            <ul>
                <li>
                    <p>Your product 1</p>
                </li>
                <hr></hr>
                <li>
                    <p>Your product 2</p>
                </li>
                <hr></hr>
                <li>
                    <p>Your product 3</p>
                </li>
                <hr></hr>
            </ul>
            <button> Checkout</button>
        </div>
        );
    }  
}

export default Cart;