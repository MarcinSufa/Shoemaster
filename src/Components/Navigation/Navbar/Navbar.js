import React, { Component } from 'react';
import  './Navbar.modules.css';
import { NavLink } from 'react-router-dom';
import CartCount from '../../Cart/CartCount/CartCount';
import { connect } from 'react-redux';
import shoppingCartImg from '../../../assets/images/shopping-cart.svg';


class  Navbar extends Component {

    componentDidMount () {
    }

    render () {
        let cartCountNum = null;
        let accountLink = null;
        if (this.props.cartCounter) {
            cartCountNum = <CartCount count = {this.props.cartCounter} />
        } 
        if ( this.props.isAuthenticated) {
            accountLink = <NavLink to="/Account" className="">Account</NavLink>
        }

        return (
            <nav className='NavBarDiv'>
                <ul className='LeftNavLink'>
                <NavLink to="/" className="">Shoemaster.com</NavLink>
                </ul>
                <ul className='RightNavLink'>
                <li>{accountLink}</li>
                {this.props.isAuthenticated? 
                <li><NavLink to="/Logout" className="">Logout</NavLink> </li>
                :<NavLink to="/Login" className="">Login</NavLink>}
                <li><NavLink to="/Cart" className="">
                <img className="shoppingCart" src={shoppingCartImg} alt="shopping cart"/>
                {cartCountNum}</NavLink></li>
                </ul>
            </nav>
        );

    }

}

const mapStateToProps = state => {
    return {
        cartCounter: state.cart.cartItemsCounter,
        isAuthenticated: state.auth.token !== null
    };
};



export default connect(mapStateToProps) (Navbar);