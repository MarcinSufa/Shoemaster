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
                    {value: 'fastest', displayValue: 'Delivery - Fastest'},
                    {value: 'cheapest', displayValue: 'Delivery - Cheapest'},
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
        event.preventDefault();
        this.setState ({loading: true});
        const customerData = {};
        let userToken = this.props.token;
        for (let formElementIdentifier in this.state.CustomerData) {
            customerData[formElementIdentifier] = this.state.CustomerData[formElementIdentifier]
        }
        let OrderDate = new Date().toLocaleString();
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
            this.props.onUpdateCart();
            //to do - render success component
        })
        .then ( () => this.props.history.replace('/'))
        .catch (error => {
            this.setState({loading: false});
        });  
    }

    componentDidMount (props) {
        if(!this.props.token) {
            this.props.history.replace('/');
        }
        this.props.onInitCheckout();        
        console.log(this.props.Cart)
        console.log(this.state.Order)
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

        // redirect to /Cart if user want to edit cart  // 
    handleCartEdit = () => {
        this.props.history.replace('/Cart');
    }

    render ()  {
        let orderPrice = this.props.fullPrice;
        let form = null;
        let formElementArray = [];
        let  printCheckoutProducts = null;
        for (let key in this.state.CustomerData){
            formElementArray.push({
                id: key,
                config: this.state.CustomerData[key]
            });
        }
        if(this.props.loading) {
            return <Spinner/> 
        }
        else if(this.props.fullPrice && this.props.Cart) {
            orderPrice = <h4>{this.props.fullPrice} $</h4>
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

            printCheckoutProducts = (Object.entries(this.props.Cart).map((product) => {
                return (
                <div className='ProductInCheckout' key={product[0]}> 
                <div className='CheckoutProductInfo' ><img className='CheckoutProductImage' src={product[1].image} alt='nike shoes'></img></div>
                    <div className='ProductWrapper'>
                        <div className='CheckoutProductInfo'><p>{product[1].brand}</p><p>{product[1].model}</p><p>{product[1].size}</p></div>
                        <div className='CheckoutProductInfo'><p>{product[1].price}$</p> </div>
                    </div>
                </div>                 
                );
            }));

        }
        return (
            <div className='Checkoutwrapper'>
                <h1>Checkout</h1>
                    <hr></hr>
                <div className='CheckoutTemplate'>
                    <div className ='CheckoutForm'>
                        {form}
                    </div>
                    <div className='CheckoutSummary'>
                        <h3>Order Summary</h3>
                        <hr></hr>
                        <div className='OrderFullPrice'>
                        <h4>Order Price: </h4>{orderPrice}
                        </div>
                        <p>Product list</p>
                        { printCheckoutProducts}
                        <div className='editCartBtn'><Button btnType='editCartBtn' clicked={this.handleCartEdit}>Edit</Button></div>
                    </div>
                    
                </div>
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
        onUpdateCart: () => dispatch(checkoutListActions.fetchLocalStoreCart()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Checkout);