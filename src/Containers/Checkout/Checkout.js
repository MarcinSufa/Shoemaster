import React, { Component } from 'react';
import './Checkout.css';
import axios from '../../axios-products';
import Spinner from "../../Components/UI/Spinner/Spinner";
import Input from '../../Components/UI/Input/Input';

class Checkout extends Component {

    state= {
        Order: [],
        CustomerData:{
            name: {
                elementType:'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType:'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType:'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType:'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType:'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType:'select',
                elementConfig: {
                    options: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'},
                ]
                },
                value: 'fastest',
                validation: {},
                valid: true
            }
        },
        loading: false,
        error: false,
        checkoutPrice: null
    }
    

    componentDidMount () {
        this.setState({loading: true});
        axios.get( '/Cart.json' )
        .then( response => {
            this.setState( { Order: response.data, loading: false });
        })
        .then( this.fullPriceCheckout)
        .catch( error => {
            this.setState( { error: error, loading: false } );
        })
    } 
    
    fullPriceCheckout = () => {
    let allCartPrices = Object.values(this.state.Order);
    let fullPrice= 0;
    for (let i = 0; i < allCartPrices.length; i++) {
        fullPrice += allCartPrices[i].price;
    }
    console.log(fullPrice);
    this.setState({checkoutPrice: fullPrice});
    }


    render ()  {
        // let orderPrice = <h3>{Object.values(this.state.checkoutPrice)}</h3>
        let orderPrice = null;
        let form = null;
        if(this.state.loading) {
            return <Spinner/> 
        }
        else if(this.state.checkoutPrice) {
            orderPrice = <h3>{this.state.checkoutPrice} $</h3>
            form = (
                <form>
                    <h3>Contact Data</h3>
                    <Input inputtype='input' type ='text' name='name' placeholder='Your Name'/>
                    <Input inputtype='input' type ='email' name='email' placeholder='Your Mail'/>
                    <Input inputtype='input' type ='text' name='street' placeholder='Street'/>
                    <Input inputtype='input' type ='text' name='postal' placeholder='Postal Code'/>
                    <button>ORDER</button>
                </form>
            )
        }
        return (
            <div>
                <h1>Checkout</h1>
                <hr></hr>
                <h3>Your Order info</h3>
                <h3>Order Price: </h3>{orderPrice} 
                <p>Product list</p>
                {form}
            </div>
        );
    }
}

export default Checkout;