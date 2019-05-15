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
        console.log(Object.entries(this.state.accountData));
        showOrders = (Object.entries(this.state.accountData).map((order) => {
            return (
            <div className='ProductInCart' key={order[0]}> 
                <div className='CartProductInfo'><h4>Price: </h4><p>{order[1].Price} $</p></div>
                <div className='CartProductInfo'><h4>Email</h4> <p>{order[1].CustomerData.email.value}</p> </div>
                <div className='CartProductInfo'><h4>Name:</h4> <p>{order[1].CustomerData.name.value}</p></div>
                <div className='CartProductInfo'><h4>Street:</h4> <p>{order[1].CustomerData.street.value}</p></div>
                <div className='CartProductInfo'><h4>Zip Code:</h4> <p>{order[1].CustomerData.zipCode.value}</p></div>
                <div className='CartProductInfo'><h4>No:</h4> <p>{order[1].OrderDetails.length}</p></div>
                <div className='CartProductInfo'><h4>Date:</h4> <p>{order[1].OrderDate}</p></div> 
            </div>              
            );
        }));

    }

    return (
        <div>
            {spinner}
            <h1>Your Orders</h1>
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