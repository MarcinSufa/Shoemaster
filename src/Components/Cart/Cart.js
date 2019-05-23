import React, { Component } from 'react';
import './Cart.css';
import Spinner from "../UI/Spinner/Spinner";
import emptyCartImg from '../../assets/images/empty.png';
import Button from '../UI/Button/Button';
import CartProductList from './CartProductList/CartProductList';
import { connect } from 'react-redux';
import * as cartListActions from '../../store/actions/index';

class Cart extends Component {

state= {
    fullPrice: null,
    ProductCount: null
}

handleDelete = (event) => {
    event.preventDefault();
    this.props.onDeleteFromCart(event);
    this.componentDidMount();
    }

cartCountHandler = () => {
    let cartProductsNum = (Object.keys(this.state.Cart).length);
    this.setState({ProductCount: cartProductsNum});
    console.log(cartProductsNum);
}   

goToCheckout = (event) => {
    event.preventDefault();
    if(this.props.isAuthenticated) {
        this.props.history.replace('/Checkout');  
    } else {
        this.props.history.replace('/Login');  
    }
}

componentDidMount () {
    this.props.onInitCart();
} 

    render() {
        let cartCountNum = null;
        let printCartProducts = null;
        let  fullCartPrice =null;
        let checkoutBtn = null;

        if(this.props.loading) {
            return <Spinner/>
        }   if (this.props.fullPrice !== 0 && this.props.Cart ) {
            fullCartPrice = <h3>Total Price: {this.props.fullPrice} $</h3>
            printCartProducts = (Object.entries(this.props.Cart).map((shoes) => {
                return (
                    <CartProductList 
                        key={shoes[0]}
                        id={shoes[0]}
                        image={shoes[1].image}
                        alt={shoes[1].brand + ' ' + shoes[1].model}
                        brand={shoes[1].brand}
                        model={shoes[1].model}
                        quantity={shoes[1].quantity}
                        size={shoes[1].size}
                        price={shoes[1].price}
                        onClick={this.handleDelete}
                    />          
                );
            }));
            checkoutBtn = <Button clicked={ this.goToCheckout}>{this.props.isAuthenticated? 'Checkout' : 'Signup to Order'} </Button>
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

const mapStateToProps = state => {
    return {
        Cart: state.cart.cart,
        loading: state.cart.loading,
        fullPrice: state.cart.fullCartPrice,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitCart: () => dispatch(cartListActions.fetchLocalStoreCart()),
        onDeleteFromCart: (event) => dispatch(cartListActions.deleteFromCart(event))
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (Cart);