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
    
    orderHandler = (event) => {
        event.preventDefault();
        this.setState ({loading: true});
        const customerData = {};
        for (let formElementIdentifier in this.state.CustomerData) {
            customerData[formElementIdentifier] = this.state.CustomerData[formElementIdentifier]
        }
        let OrderDate = new Date ();
        const order = {
            OrderDetails: this.state.Order,
            CustomerData:  customerData,
            OrderDate:  OrderDate 
        } 

    axios.post ('/orders.json', order)
        .then ( response => {
            this.setState({loading: false});
        })
        .catch (error => {
            this.setState({loading: false});
        })        
    axios.delete(`/Cart.json`)
        .then(res => {
            this.setState({loading: false});
            this.props.history.replace('/');  
        })
        .catch (error => {
            this.setState({loading: false});
        })    
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
    this.setState({checkoutPrice: fullPrice});
    }

    // User input will update state and present input in form
    inputChangeHandler= (event, inputIdentifier) => {
        const updatedCustomerData = {
            ...this.state.CustomerData
        };
        const updatedFormElement = {
            ...updatedCustomerData[inputIdentifier]
        }; 
        updatedFormElement.value = event.target.value;
        updatedCustomerData[inputIdentifier] = updatedFormElement;
        this.setState({CustomerData: updatedCustomerData})
    }

    render ()  {
        // let orderPrice = <h3>{Object.values(this.state.checkoutPrice)}</h3>
        let orderPrice = null;
        let form = null;
        let formElementArray = [];
        for (let key in this.state.CustomerData){
            formElementArray.push({
                id: key,
                config: this.state.CustomerData[key]
            });
        }
        if(this.state.loading) {
            return <Spinner/> 
        }
        else if(this.state.checkoutPrice) {
            orderPrice = <h3>{this.state.checkoutPrice} $</h3>
            form = (
                <form onSubmit={this.orderHandler}>
                    <h3>Contact Data</h3>
                    {formElementArray.map(formElement => (
                        <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangeHandler(event, formElement.id)}
                        />
                    ))}
                    <button className='CheckoutBtn'>ORDER</button>
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