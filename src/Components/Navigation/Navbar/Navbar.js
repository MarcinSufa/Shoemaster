import React, { Component } from 'react';
import  './Navbar.modules.css';
import { NavLink } from 'react-router-dom';
import CartCount from '../../Cart/CartCount/CartCount';
import { connect } from 'react-redux';


class  Navbar extends Component {

    componentDidMount () {
    }

    render () {
        let cartCountNum = null;
        if (this.props.cartCounter) {
            cartCountNum = <CartCount count = {this.props.cartCounter} />
        }

        return (
            <nav className='NavBarDiv'>
                <ul className='LeftNavLink'>
                <NavLink to="/" className="">Shoemaster.com</NavLink>
                </ul>
                <ul className='RightNavLink'>
                <li>About </li>
                <li>Log-in </li>
                <li><NavLink to="/Cart" className="">Cart</NavLink>{cartCountNum}</li>
                </ul>
            </nav>
        );

    }

}

const mapStateToProps = state => {
    return {
        cartCounter: state.cart.cartItemsCounter,
    };
}



export default connect(mapStateToProps) (Navbar);