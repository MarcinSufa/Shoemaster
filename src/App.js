import React, { Component } from 'react';
import './App.modules.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './Components/Cart/Cart';
import Checkout from './Containers/Checkout/Checkout';
import ProductList from './Components/ProductList/ProductList';
import Auth from './Containers/Auth/Auth';
import Logout from './Containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import Account from './Containers/Account/Account';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';

class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        let routes = (
            <Switch>
                <Route path='/Cart' component={Cart} />
                <Route path='/Login' component={Auth} />
                <Route path='/' exact component={ProductList} />
                <Redirect to='/' />
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path='/Cart' component={Cart} />
                    <Route path='/Logout' component={Logout} />
                    <Route path='/Login' component={Auth} />
                    <Route path='/Account' component={Account} />
                    <Route path='/Checkout' component={Checkout} />
                    <Route path='/' exact component={ProductList} />
                    <Redirect to='/' />
                </Switch>
            );
        }
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <Layout>{routes}</Layout>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

const mapStateProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(connect(mapStateProps, mapDispatchToProps)(App));
