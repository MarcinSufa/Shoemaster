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
            accountLink = <li><NavLink activeClassName='activeLink' to="/Account" className="NavLink">Account</NavLink></li>
        }

        return (
            <nav className='NavBarDiv'>
                <ul className='LeftNavLink'>
                <NavLink to="/" activeClassName="rootActive" exact className="Logo">Shoemaster.com</NavLink>
                </ul>
                <ul className='RightNavLink'>
                {accountLink}
                {this.props.isAuthenticated? 
                <li><NavLink activeClassName='activeLink' to="/Logout" className="NavLink">Logout</NavLink></li>
                :<li><NavLink activeClassName='activeLink' to="/Login" className="NavLink">Login</NavLink></li>
                }
                <li><NavLink activeClassName='activeLink' to="/Cart" className="NavLink">
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