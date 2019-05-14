import React, { Component } from 'react';
import './Checkout.css';
import axios from '../../axios-products';
import Spinner from "../../Components/UI/Spinner/Spinner";
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import { connect } from 'react-redux';
import * as checkoutListActions from '../../store/actions/index';

class Checkout extends Component {

    state= {
        Order: null,
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
                    maxLength: 6
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
        checkoutPrice: null,
        formIsValid: false
    }


    orderHandler = (event) => {
        // event.preventDefault();
        this.setState ({loading: true});
        const customerData = {};
        let userToken = this.props.token;
        for (let formElementIdentifier in this.state.CustomerData) {
            customerData[formElementIdentifier] = this.state.CustomerData[formElementIdentifier]
        }
        let OrderDate = new Date ();
        const order = {
            OrderDetails: this.props.Cart,
            CustomerData:  customerData,
            OrderDate:  OrderDate ,
            Price: this.props.fullPrice,
            userId: this.props.userId
        } 

    axios.post ('/orders.json?auth=' + userToken, order)
        .then ( response => {
            this.setState({loading: false});
            this.props.cartDeleteHandler();
            //to do - render success component
        })
        .then ( () => this.props.history.replace('/'))
        .catch (error => {
            this.setState({loading: false});
        });  

    // axios.delete(`/Cart.json`)
    //     .then(res => {
    //         this.setState({loading: false});
    //         this.props.history.replace('/');  
    //     })
    //     .catch (error => {
    //         this.setState({loading: false});
    //     })    
    }

    componentDidMount (props) {
        if(!this.props.token) {
            this.props.history.replace('/');
        }
        // this.setState({loading: true});
        this.props.onInitCheckout();        
        // this.setState( { Order: this.props.Cart, loading: false } );
        console.log(this.props.Cart)
        console.log(this.state.Order)
        // if (this.state.Order==null) {
        //     this.props.history.replace('/');
        // }


        // axios.get( '/Cart.json' )
        // .then( response => {
        //     this.setState( { Order: response.data, loading: false });
        // })
        // .then( (response) => (this.state.Order==null)? this.props.history.replace('/'): this.fullPriceCheckout()) 
        // .catch( error => {
        //     this.setState( { error: error, loading: false } );
        // })
    } 
    
    fullPriceCheckout = () => {
    let allCartPrices = Object.values(this.props.Cart);
    let fullPrice= 0;
    for (let i = 0; i < allCartPrices.length; i++) {
        fullPrice += allCartPrices[i].price;
    }
    this.setState({checkoutPrice: fullPrice});
    }

    checkValidity (value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    // User input will update state and present input to form
    inputChangeHandler= (event, inputIdentifier) => {
        const updatedCustomerData = {
            ...this.state.CustomerData
        };
        const updatedFormElement = {
            ...updatedCustomerData[inputIdentifier]
        }; 
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched= true;
        updatedCustomerData[inputIdentifier] = updatedFormElement;

        let formIsValid = true; 
        for ( let inputIdentifier in updatedCustomerData) {
            formIsValid = updatedCustomerData[inputIdentifier].valid && formIsValid
        }
        this.setState({CustomerData: updatedCustomerData, formIsValid:formIsValid})
    }

    render ()  {
        // let orderPrice = <h3>{Object.values(this.state.checkoutPrice)}</h3>
        let orderPrice = this.props.fullPrice;
        let form = null;
        let formElementArray = [];
        for (let key in this.state.CustomerData){
            formElementArray.push({
                id: key,
                config: this.state.CustomerData[key]
            });
        }
        if(this.props.loading) {
            return <Spinner/> 
        }
        else if(this.props.fullPrice) {
            orderPrice = <h3>{this.props.fullPrice} $</h3>
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
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        />
                    ))}
                    <Button disabled={!this.state.formIsValid}>ORDER</Button>
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

const mapStateToProps = state => {
    return {
        Cart: state.cart.cart,
        loading: state.cart.loading,
        fullPrice: state.cart.fullCartPrice,
        token: state.auth.token,
        userId: state.auth.userId
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitCheckout: () => dispatch(checkoutListActions.fetchLocalStoreCart()),
        cartDeleteHandler: () => dispatch(checkoutListActions.clearLocalStore()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Checkout);