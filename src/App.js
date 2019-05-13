import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import {Route, Switch } from 'react-router-dom'; 
import Cart from './Components/Cart/Cart';
import Checkout from './Containers/Checkout/Checkout';
import ProductList from './Components/ProductList/ProductList';
import Auth from './Containers/Auth/Auth';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
        <Switch>
        <Route path="/Cart" component={Cart}/>
        <Route path="/Checkout" component={Checkout}/>
        <Route path="/Login" component={Auth}/>
        <Route path="/" exact component={ProductList}/>
        </Switch>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
