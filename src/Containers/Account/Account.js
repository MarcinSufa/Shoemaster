import React, { Component } from 'react';
import './Account.css';
import Spinner from "../../Components/UI/Spinner/Spinner";
import { connect } from 'react-redux';
import axios from '../../axios-products';


class Account extends Component {

    state = {
        accountData:null,
        loading: false,
        error: null
    }

    componentDidMount () {
        this.setState({loading: true});  

        let queryParams = '?auth=' + this.props.token + '&orderBy="userId"&equalTo="' + this.props.userId + '"';
        axios.get( '/orders.json' + queryParams )
        .then( response => {
            this.setState( { accountData: response.data, loading: false });
            console.log(this.state.accountData);
        })
        .catch( error => {
            this.setState( { error: error, loading: false } );
        })
    } 


render () {
    let spinner = null;
    let showOrders = null;
    if (this.state.loading) {
        spinner = (<Spinner/>);
    }
    if (this.state.accountData) {
        console.log(Object.values(this.state.accountData));
        showOrders = (Object.values(this.state.accountData).map((shoes, index) => {
            return (
            <div className='ProductInCart' key={shoes.index}> 
            <div><p>Price: {shoes.Price}</p></div>
            <div><p>Date: {shoes.OrderDate}</p></div>
            {/* <div className='cartProductDelete ' ><img className='SmallProductImage' src={shoes[1].image} alt='nike shoes'></img></div>
                <div className='CartProductInfo'><h4>Brand</h4><p>{shoes[1].brand}</p></div>
                <div className='CartProductInfo'><h4>Model</h4><p>{shoes[1].model}</p></div>
                <div className='CartProductInfo'><h4>Quantity</h4><p>{shoes[1].quantity}</p></div>
                <div className='CartProductInfo'><h4>Size</h4><p>{shoes[1].size}</p> </div>
                <div className='CartProductInfo'><h4>Price</h4><p>{shoes[1].price}$</p> </div> */}
            </div>                 
            );
        }));

    }

    return (
        <div>
            {spinner}
            <h1>Your Account</h1>
            {showOrders}
        </div>
    );
}

}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        token: state.auth.token
    };
}

export default connect(mapStateToProps) (Account);