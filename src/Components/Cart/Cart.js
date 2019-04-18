import React, { Component } from 'react';
import './Cart.css';
import axios from '../../axios-products';
import Spinner from "../UI/Spinner/Spinner";
import emptyCartImg from '../../assets/images/empty.png';


class Cart extends Component {

state= {
    Cart: [],
    loading: false,
    error: false,
    fullPrice: null
}

handleDelete = (event) => {
    event.preventDefault();
    let PostId = event.currentTarget.value;
    axios.delete(`/Cart/${PostId}.json`)
        .then(res => {
            this.componentDidMount();
        // window.location.reload();
        });
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
    console.log(fullPrice);
    this.setState({fullPrice: fullPrice});
}

    render() {
let printCartProducts = null;
let  fullCartPrice =null;
let checkoutBtn = null;
        if(this.state.loading) {
            return <Spinner/>
        }  else if (this.state.Cart !== null) {
            fullCartPrice = <h3>Full Price: {this.state.fullPrice} $</h3>
            
            printCartProducts = (Object.entries(this.state.Cart).map((shoes) => {
                return (
                <React.Fragment>
                <div key={shoes[0]}><img className='SmallProductImage' src={shoes[1].image} alt='nike shoes'></img>
                    <div><h4>Quantity</h4><p>{shoes[1].quantity}</p></div>
                    <div><h3>Product ID :</h3><p>{shoes[1].id}</p></div>
                    <div><h3>Size{shoes[1].size}</h3> </div>
                    <div><h3>Price{shoes[1].price} $</h3></div>
                    <button  value={shoes[0]} onClick={ this.handleDelete} >Delete</button>
                    <hr/>
                </div>
                </React.Fragment>
                );
            }));
            checkoutBtn = <button onClick={ this.goToCheckout}> Checkout </button>
        } else  {
            printCartProducts= (
                <div>
                <h3> is Empty</h3>
                <img className="ImageEmptyCart" src={emptyCartImg} alt="empty cart"></img>
                </div>
            )
        } 
        return (
            <div>
            <h1>Your Cart</h1>
            <div>
                    {printCartProducts}
                <hr></hr>
                {fullCartPrice}
                
            </div>
                {checkoutBtn}
        </div>
        );
    }  
}

export default Cart;