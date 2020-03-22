import React, { Component } from 'react';
import './Account.modules.css';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import axios from '../../axios-products';
import CartProductList from '../../Components/Cart/CartProductList/CartProductList';
import Button from '../../Components/UI/Button/Button';

class Account extends Component {
    state = {
        accountData: null,
        loading: false,
        error: null,
        showProducts: false,
        ProductId: null
    };

    componentDidMount() {
        this.setState({ loading: true });

        let queryParams = '?auth=' + this.props.token + '&orderBy="userId"&equalTo="' + this.props.userId + '"';
        axios
            .get('/orders.json' + queryParams)
            .then(response => {
                this.setState({ accountData: response.data, loading: false });
            })
            .catch(error => {
                this.setState({ error: error, loading: false });
            });
    }

    openProductList = id => {
        this.setState(prevState => {
            return { showProducts: !prevState.showProducts };
        });
        if (id !== this.state.ProductId) {
            this.setState({ showProducts: true, ProductId: id });
        } else {
            this.setState({ ProductId: id });
        }
    };

    render() {
        let spinner = null;
        let showOrders = null;
        if (this.state.loading) {
            spinner = <Spinner />;
        }

        if (this.state.accountData) {
            showOrders = Object.entries(this.state.accountData).map(order => {
                return (
                    <div className='Account' key={order[0]}>
                        <div className='OrderWrapper'>
                            <div className='OrderProductInfo'>
                                <h4>Date</h4> <p>{order[1].OrderDate}</p>
                            </div>
                            <div className='OrderProductInfo'>
                                <h4>Email</h4> <p>{order[1].CustomerData.email.value}</p>{' '}
                            </div>
                            <div className='OrderProductInfo'>
                                <h4>Name</h4> <p>{order[1].CustomerData.name.value}</p>
                            </div>
                            <div className='OrderProductInfo'>
                                <h4>Street</h4> <p>{order[1].CustomerData.street.value}</p>
                            </div>
                            <div className='OrderProductInfo'>
                                <h4>Total </h4>
                                <p>{order[1].Price} $</p>
                            </div>
                            <div className='OrderProductBtn'>
                                <Button
                                    clicked={() => {
                                        this.openProductList(order[0]);
                                    }}>
                                    Details
                                </Button>
                            </div>
                        </div>
                        {this.state.showProducts && order[0] === this.state.ProductId
                            ? Object.entries(order[1].OrderDetails).map(prod => {
                                  return (
                                      <CartProductList
                                          key={prod[0]}
                                          id={prod[0]}
                                          image={prod[1].image}
                                          alt={prod[1].brand + ' ' + prod[1].model}
                                          brand={prod[1].brand}
                                          model={prod[1].model}
                                          quantity={prod[1].quantity}
                                          size={prod[1].size}
                                          price={prod[1].price}
                                          noBtn={true}
                                      />
                                  );
                              })
                            : null}
                    </div>
                );
            });
        }

        return (
            <div className='OrdersLayout'>
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
};

export default connect(mapStateToProps)(Account);
