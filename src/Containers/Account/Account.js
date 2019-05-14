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
    if (this.state.loading) {
        spinner = (<Spinner/>);
    }
    return (
        <div>
            {spinner}
            <h1>Your Account</h1>
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