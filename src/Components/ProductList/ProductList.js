import React, { Component } from 'react';
import Product from '../Product/Product';
import'./ProductList.css';
import Modal from '../UI/Modal/Modal';
import FullProductInfo from '../FullProductInfo/FullProductInfo';
import Spinner from '../UI/Spinner/Spinner';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import * as productListActions from '../../store/actions/index';


class ProductList extends Component {

    state = {
    selectedProductId: null,
    selectedProductData: null,
    visible: 8,
    }
    
    productSelectedHandler = (id, shoes) => { 
        this.setState({selectedProductId: id});
        this.setState({selectedProductData: shoes});
    }

    productSelectCancelHandler = () => {
        this.setState({selectedProductId: null});
    }
    
    loadMore = () => {
        this.setState((prev) => {
            return {visible: prev.visible + 12};
        });
    }

    componentDidMount () {
        this.props.onInitProducts();
    }


    render () {
        let loadMoreBtn = null;
        let fullProductInf = null;
        let productList = this.props.error? <p>Unfortunetly, we can't load shoes from database!</p> : <Spinner/>;

        if (this.props.prod) {
            productList = (this.props.prod.slice(0, this.state.visible).map((shoes, index) => {
                return <Product 
                key={shoes.id}
                brand={shoes.brand}
                model={shoes.model} 
                price={shoes.price}
                image={shoes.image}
                size={shoes.size}
                type={shoes.type}
                madeOf={shoes.madeOf}
                clicked={() => this.productSelectedHandler(shoes.id, shoes)}
                />
            })); 
            loadMoreBtn = <Button clicked={this.loadMore} >Load more</Button>
        } 
        
        if (this.state.selectedProductId != null) {
            fullProductInf = (
                <Modal modalClosed={this.productSelectCancelHandler}>
                <FullProductInfo 
                id={this.state.selectedProductId}
                brand={this.state.selectedProductData.brand}
                model={this.state.selectedProductData.model} 
                price={this.state.selectedProductData.price}
                description={this.state.selectedProductData.description}
                image={this.state.selectedProductData.image}
                size={this.state.selectedProductData.size}
                type={this.state.selectedProductData.type}
                madeOf={this.state.selectedProductData.madeOf}
                />
                </Modal>
            );
        }
        
        return (
            <React.Fragment>
                {fullProductInf} 
                <div className='ShoeDisplayer'> 
                {productList}
                </div> 
                {loadMoreBtn}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        prod: state.Products,
        error: state.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitProducts: () => dispatch(productListActions.initProducts())
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductList);