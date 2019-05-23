import React, { Fragment, Component } from 'react';
import  './Navbar.modules.css';
import { NavLink } from 'react-router-dom';
import CartCount from '../../Cart/CartCount/CartCount';
import { connect } from 'react-redux';
import shoppingCartImg from '../../../assets/images/shopping-cart.svg';
import HamburgerMenu from '../../UI/HamburgerMenu/HamburgerMenu';
import * as navbarListActions from '../../../store/actions/index';

class  Navbar extends Component {

    state= {
        menuIsClicked: false
    }

    menuClickedHandler = () => {
        this.setState(prevState => ({
            menuIsClicked: !prevState.menuIsClicked}));
            console.log(this.state.menuIsClicked);
    }

    closeMenuHandler = () => {
        this.setState({menuIsClicked: false});
    }

    componentDidMount () {
        this.props.initCartCouter();
    }


    render () { 
        let linkStyling = 'NavLink';
        let rightLinkWrapper = 'RightNavLink';
        let cartCountNum = '';
        let menuIsOpen = '';

        if (this.state.menuIsClicked) {
            linkStyling = 'NavLinkMobile';
            rightLinkWrapper = 'mobileLinksWrapper';
            menuIsOpen = 'open';
        }
        if (this.props.cartCounter) {
            cartCountNum = <CartCount count = {this.props.cartCounter} />
        } 

        return (
            <nav className='NavBarDiv'>
                <ul className='LeftNavLink'>
                <NavLink onClick={this.closeMenuHandler} to="/" activeClassName="rootActive" exact className="Logo">Shoemaster</NavLink>
                </ul>
                <ul className={rightLinkWrapper}>
                <div className='HamMenu'><HamburgerMenu className={menuIsOpen} clicked={this.menuClickedHandler}/></div>
                {this.props.isAuthenticated? 
                <Fragment>
                    <NavLink onClick={this.closeMenuHandler} activeClassName='activeLink' to="/Account" className={linkStyling}>Account</NavLink>
                    <NavLink onClick={this.closeMenuHandler} activeClassName='activeLink' to="/Logout" className={linkStyling}>Logout</NavLink>
                </Fragment>
                :<NavLink onClick={this.closeMenuHandler} activeClassName='activeLink' to="/Login" className={linkStyling}>Login</NavLink>
                }
                <NavLink onClick={this.closeMenuHandler} activeClassName='activeLink' to="/Cart" className={linkStyling}>
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

const mapDispatchToProps = dispatch => {
    return {
        initCartCouter: () => dispatch(navbarListActions.fetchLocalStoreCart()),
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (Navbar);