import React, { Component } from 'react';
import  './FullProductInfo.css';
import { withRouter } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import productAddedImg from '../../assets/images/done.png';
import warningImg from '../../assets/images/warning.png';
import ProductMadeOf from '../Product/ProductMadeOf/ProductMadeOf';

class FullProductInfo extends Component {

    state= {
        quantity: null,
        id: null,
        size: null, 
        price: null,
        image: null,
        addedToCart: false,
        sizeNotSelected: false,
        continueToCart: false,
        madeOfClicked: false
    }


    addToCartHandler = (selectedShoeId, selectedShoePrice, selectedShoeImg) => {
        let newState = { ...this.state};
        if (this.state.size) {
            newState.quantity = 1; 
            newState.id = selectedShoeId;
            newState.price = selectedShoePrice;
            newState.image = selectedShoeImg;
            this.setState({quantity: newState.quantity, id: newState.id, price: newState.price, addedToCart: true, image: newState.image}, () => {
                const cartProduct = {
                    id: this.state.id, 
                    size: this.state.size,
                    quantity: this.state.quantity,
                    price: this.state.price,
                    image: this.state.image,
                    brand: this.props.brand,
                    model: this.props.model,
                    type: this.props.type,
                    madeOf: this.props.madeOf
                }
                this.props.onAddToCart(cartProduct);
                this.setState({continueToCart: true})
            });
        } else {
            this.setState({sizeNotSelected: true})
        }
    }

    alertHandler = () => {
        this.setState({sizeNotSelected: false});
    }

    selectSizeHandler = (sizKey) => {
        this.setState({size: sizKey[0]});
        console.log(this.state.size);
    }

    continueHandler = (event) => {
        this.props.history.push('/');
        this.setState({continueToCart: false});
    }

    goToCartHandler = () => {
        this.props.history.push('/Cart');
        this.setState({continueToCart: false});
    }
    
    showMadeOf = () => {
        this.setState((prevState) => {
            return {madeOfClicked: !prevState.madeOfClicked} 
        })
        console.log(this.state.madeOfClicked);
    }

    render () {
        let alertSizeSelect = null;
        let askIfContinue = null;

        if (this.state.sizeNotSelected) {
            alertSizeSelect = (
            <Modal className={'sizeAlert'} modalClosed={this.alertHandler}>
            <img className='productAddedImg' src={warningImg} alt='Product added to cart'/>
            <div className='alertStyle'> <p>Please Select your size!</p></div>
            </Modal>
            ); 
        }

        if(this.state.continueToCart) {
            askIfContinue = (
                <Modal className={'continueAlert'}>
                    <h4>Product was added to Cart</h4>
                    <img className='productAddedImg' src={productAddedImg} alt='Product added to cart'/>
                    <Button clicked={this.continueHandler}>Continue Shopping</Button>
                    <Button clicked={this.goToCartHandler}>Go to Cart</Button>
                </Modal>
            )
        }

        const productSize = Object.entries(this.props.size)
        .map((sizKey, i) => {
            if(sizKey[1] === 0) {
            return (<button className="ShoeNotAvailableSize" disabled key={i} >{sizKey[0]}</button>);
            }else {
             let checkIfClicked = this.state.size === sizKey[0]? 'ShoeAvailableSizeBtnActive': 'ShoeAvailableSizeBtn' //  Dynamically change Css class if button clicked
            return (<button className={checkIfClicked} onClick={() => {this.selectSizeHandler(sizKey)}} key={i} >{sizKey[0]}</button>);
        }}) 

        let selectedShoeId = this.props.id;
        let selectedShoePrice = this.props.price;
        let selectedShoeImg = this.props.image;
        let addToCartBtn = (
            <Button  clicked={() => this.addToCartHandler(selectedShoeId, selectedShoePrice, selectedShoeImg)}>Add to Cart</Button>
        )
    return (
        <React.Fragment> 
        <div  className='close' onClick={this.props.exit}/>
        <div className='FullProductCard' >
            <div className='FullProductLeft'>
            <h3 className='FullPriceTag'>{this.props.price} $</h3>
            <img className='FullProductImage' src={this.props.image} alt={this.props.model + ' shoe image'}></img>
            {this.state.madeOfClicked?
                    <ProductMadeOf
                    class={'ShoeMaterials'}
                    upper={this.props.madeOf.upper}
                    lining={this.props.madeOf.lining}
                    outerSole={this.props.madeOf.outerSole}
                    />  : null}
            </div>
            <div className="FullProductRigth">
            {alertSizeSelect}
                <h1>{this.props.brand}</h1>
                <span><h2>{this.props.model}</h2></span>   
                <h4>Product id: {this.props.id} </h4>
                <p>{this.props.description}</p>
                <br />
                
                <br />
                <div>
                </div>
                <Button clicked={this.showMadeOf}>Made off:</Button>
                <h3>Chose your size</h3>
                <div className='ProductSize'>{productSize }</div>
                {addToCartBtn}
                {askIfContinue}
            </div>
        </div>
    </React.Fragment>
    );
    }   
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (cartProduct) => dispatch(actions.addToCartLocalStorage(cartProduct))
    };
};

export default withRouter(connect(null, mapDispatchToProps) (FullProductInfo));

