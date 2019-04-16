import React, { Component } from 'react';
import './Checkout.css';

class Checkout extends Component {
    render () {
        console.log(this.props);
        return (
            <div>
                <h1>Checktout</h1>
                <hr></hr>
                <h3>Your Order info</h3>
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