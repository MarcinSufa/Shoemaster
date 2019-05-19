import React, { Component } from 'react';
import  './Navbar.modules.css';
import { NavLink } from 'react-router-dom';
import CartCount from '../../Cart/CartCount/CartCount';
import { connect } from 'react-redux';
import shoppingCartImg from '../../../assets/images/shopping-cart.svg';
import HamburgerMenu from '../../UI/HamburgerMenu/HamburgerMenu';


class  Navbar extends Component {

    state= {
        menuIsClicked: false
    }

    menuClickedHandler = () => {
        this.setState(prevState => ({
            menuIsClicked: !prevState.menuIsClicked}));
            console.log(this.state.menuIsClicked);
    }


    render () { 
        let linkStyling = 'NavLink';
        let rightLinkWrapper = 'RightNavLink';
        let cartCountNum = null;
        let accountLink = null;
        let menuIsOpen = null;

        if (this.state.menuIsClicked) {
            linkStyling = 'NavLinkMobile';
            rightLinkWrapper = 'mobileLinksWrapper';
            menuIsOpen = 'open';
        }
        if (this.props.cartCounter) {
            cartCountNum = <CartCount count = {this.props.cartCounter} />
        } 
        if ( this.props.isAuthenticated) {
            accountLink = <NavLink activeClassName='activeLink' to="/Account" className={linkStyling}>Account</NavLink>
        }

        return (
            <nav className='NavBarDiv'>
                <ul className='LeftNavLink'>
                <NavLink to="/" activeClassName="rootActive" exact className="Logo">Shoemaster.com</NavLink>
                </ul>
                <ul className={rightLinkWrapper}>
                <div className='HamMenu'><HamburgerMenu className={menuIsOpen} clicked={this.menuClickedHandler}/></div>
                {accountLink}
                {this.props.isAuthenticated? 
                <NavLink activeClassName='activeLink' to="/Logout" className={linkStyling}>Logout</NavLink>
                :<NavLink activeClassName='activeLink' to="/Login" className={linkStyling}>Login</NavLink>
                }
                <NavLink activeClassName='activeLink' to="/Cart" className={linkStyling}>
                <img className="shoppingCart" src={shoppingCartImg} alt="shopping cart"/>
                {cartCountNum}</NavLink>
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