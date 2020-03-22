import React, { Fragment, Component } from 'react';
import './Navbar.modules.css';
import { NavLink } from 'react-router-dom';
import CartCount from '../../Cart/CartCount/CartCount';
import { connect } from 'react-redux';
import shoppingCartImg from '../../../assets/images/shopping-cart.svg';
import HamburgerMenu from '../../UI/HamburgerMenu/HamburgerMenu';
import * as navbarListActions from '../../../store/actions/index';

class Navbar extends Component {
    state = {
        menuIsClicked: false
    };

    menuClickedHandler = () => {
        this.setState(prevState => ({
            menuIsClicked: !prevState.menuIsClicked
        }));
        console.log(this.state.menuIsClicked);
    };

    closeMenuHandler = () => {
        this.setState({ menuIsClicked: false });
    };

    componentDidMount() {
        this.props.initCartCouter();
    }

    render() {
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
            cartCountNum = <CartCount count={this.props.cartCounter} />;
        }

        return (
            <nav className='NavBarDiv'>
                <ul className='LeftNavLink'>
                    <NavLink onClick={this.closeMenuHandler} to='/' activeClassName='rootActive' exact className='Logo'>
                        Shoemaster
                    </NavLink>
                </ul>
                <ul className={rightLinkWrapper}>
                    <div className='HamMenu'>
                        <HamburgerMenu className={menuIsOpen} clicked={this.menuClickedHandler} />
                    </div>
                    {this.props.isAuthenticated ? (
                        <Fragment>
                            <NavLink onClick={this.closeMenuHandler} activeClassName='activeLink' to='/Account' className={linkStyling}>
                                Account
                            </NavLink>
                            <NavLink onClick={this.closeMenuHandler} activeClassName='activeLink' to='/Logout' className={linkStyling}>
                                Logout
                            </NavLink>
                        </Fragment>
                    ) : (
                        <NavLink onClick={this.closeMenuHandler} activeClassName='activeLink' to='/Login' className={linkStyling}>
                            Login
                        </NavLink>
                    )}
                    <NavLink onClick={this.closeMenuHandler} activeClassName='activeLink' to='/Cart' className={linkStyling}>
                        <img className='shoppingCart' src={shoppingCartImg} alt='shopping cart' />
                        {cartCountNum}
                    </NavLink>
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
        initCartCouter: () => dispatch(navbarListActions.fetchLocalStoreCart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

/* import React, { Fragment, Component } from 'react';
import './Navbar.modules.css';
import { NavLink } from 'react-router-dom';
import CartCount from '../../Cart/CartCount/CartCount';
import { connect } from 'react-redux';
import shoppingCartImg from '../../../assets/images/shopping-cart.svg';
import HamburgerMenu from '../../UI/HamburgerMenu/HamburgerMenu';
import * as navbarListActions from '../../../store/actions/index';
import styled from 'styled-components';

const NavLinkStyled = styled(NavLink)`
    ${({ menuIsClicked }) =>
        menuIsClicked &&
        `
        display: flex;
    flex-direction: column;
    padding: 20px 0px;
    font-weight: 400;
    font-size: 20px;

        @media(max-width: 624px) {
        flex-direction: row;
        justify-content: center;
    }
    `}
    ${({ menuIsClicked }) =>
        !menuIsClicked &&
        `
    padding: 10px 30px;
        :hover {
        cursor: pointer;
        color:#6a1b9a;
        }
    `}
    .rootActive {
        color: white;
        border-radius: 49% 51% 58% 42% / 35% 74% 26% 65%;
        border-color: #6a1b9a;
        background-color: #6a1b9a;
    }
    color: ${({ theme }) => theme.colors.violetMedium};

    :hover {
        cursor: pointer;
        color: #6a1b9a;
    }

    .Logo {
        padding: 10px;
    }

    .Logo:hover {
        color: white;
        border-radius: 49% 51% 58% 42% / 35% 74% 26% 65%;
        background-color: #4a148c;
    }

    @media (max-width: 624px) {
        display: none;
    }
`;
const NavBarDiv = styled.nav`
    display: flex;
    color: black;
    text-align: center;
    justify-content: space-between;
    padding: 0;
    margin-bottom: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: fixed;
    overflow: hidden;
    width: 100vw;
    background-color: white;
    z-index: 450;
    top: 0;
    li {
        display: inline-block;
        padding: 0 30px;
        font-family: Roboto;
        font-size: 20px;
    }

    a {
        text-decoration: none;
        color: black;
        outline: none;
    }
`;

const LeftNavLink = styled.ul`
    font-family: Roboto;
    font-size: 20px;
    color: black;
    display: inline-block;
    @media (max-width: 624px) {
        order: 2;
        padding-right: 10px;
    }
`;
const RightNavLink = styled.ul`
    ${({ menuIsClicked }) =>
        menuIsClicked &&
        `
    font-family: Roboto; 
    font-size: 20px;
    color: black;
    display: inline-block;
    padding-right: 20px;
`}
    ${({ menuIsClicked }) =>
        menuIsClicked &&
        `
     display: flex; 
    flex-direction: column;
    padding-left: 0;
    `}
      @media(max-width: 624px) {
        padding: 0;
        order: 1;
    }
`;

const ShoppingCart = styled.img`
    height: 16px;
    width: auto;
`;

const HamMenu = styled.div`
    padding: 0px 20px 0px;
    @media (min-width: 625px) {
        display: none;
    }
`;

class Navbar extends Component {
    state = {
        menuIsClicked: false
    };

    menuClickedHandler = () => {
        this.setState(prevState => ({
            menuIsClicked: !prevState.menuIsClicked
        }));
        console.log(this.state.menuIsClicked);
    };

    closeMenuHandler = () => {
        this.setState({ menuIsClicked: false });
    };

    componentDidMount() {
        this.props.initCartCouter();
    }

    render() {
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
            cartCountNum = <CartCount count={this.props.cartCounter} />;
        }

        return (
            <NavBarDiv>
                <LeftNavLink>
                    <NavLinkStyled menuclicked={this.state.menuIsClicked ? 'true' : null} onClick={this.closeMenuHandler} to='/' activeClassName='rootActive' exact className='Logo'>
                        Shoemaster
                    </NavLinkStyled>
                </LeftNavLink>
                <RightNavLink menuclicked={this.state.menuIsClicked ? 'true' : null}>
                    <HamMenu>
                        <HamburgerMenu className={menuIsOpen} clicked={this.menuClickedHandler} />
                    </HamMenu>
                    {this.props.isAuthenticated ? (
                        <Fragment>
                            <NavLinkStyled menuclicked={this.state.menuIsClicked ? 'true' : null} onClick={this.closeMenuHandler} activeClassName='activeLink' to='/Account' className={linkStyling}>
                                Account
                            </NavLinkStyled>
                            <NavLinkStyled menuclicked={this.state.menuIsClicked ? 'true' : null} onClick={this.closeMenuHandler} activeClassName='activeLink' to='/Logout' className={linkStyling}>
                                Logout
                            </NavLinkStyled>
                        </Fragment>
                    ) : (
                        <NavLinkStyled menuclicked={this.state.menuIsClicked ? 'true' : null} onClick={this.closeMenuHandler} activeClassName='activeLink' to='/Login' className={linkStyling}>
                            Login
                        </NavLinkStyled>
                    )}
                    <NavLinkStyled menuclicked={this.state.menuIsClicked ? 'true' : null} onClick={this.closeMenuHandler} activeClassName='activeLink' to='/Cart' className={linkStyling}>
                        <ShoppingCart src={shoppingCartImg} alt='shopping cart' />
                        {cartCountNum}
                    </NavLinkStyled>
                </RightNavLink>
            </NavBarDiv>
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
        initCartCouter: () => dispatch(navbarListActions.fetchLocalStoreCart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
 */
