import React, { Component } from 'react';
import './Cart.css';
import Spinner from "../UI/Spinner/Spinner";
import emptyCartImg from '../../assets/images/empty.png';
// import CartCount from "./CartCount/CartCount";
import Button from '../UI/Button/Button';
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
        }  else if (this.props.fullPrice !== 0 && this.props.Cart ) {
            fullCartPrice = <h3>Total Price: {this.props.fullPrice} $</h3>
            // cartCountNum = <CartCount count = {this.state.ProductCount} />
            printCartProducts = (Object.entries(this.props.Cart).map((shoes) => {
                return (
                <div className='ProductInCart' key={shoes[0]}> 
                <div className='cartProductDelete ' ><img className='SmallProductImage' src={shoes[1].image} alt='nike shoes'></img></div>
                    <div className='CartProductInfo'><h4>Brand</h4><p>{shoes[1].brand}</p></div>
                    <div className='CartProductInfo'><h4>Model</h4><p>{shoes[1].model}</p></div>
                    <div className='CartProductInfo'><h4>Quantity</h4><p>{shoes[1].quantity}</p></div>
                    <div className='CartProductInfo'><h4>Size</h4><p>{shoes[1].size}</p> </div>
                    <div className='CartProductInfo'><h4>Price</h4><p>{shoes[1].price}$</p> </div>
                    <div className='cartProductDelete'><Button  value={shoes[0]} clicked={this.handleDelete}>Delete</Button></div>
                </div>                 
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