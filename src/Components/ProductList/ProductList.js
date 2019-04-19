import React, { Component } from 'react';
import Product from '../Product/Product';
import'./ProductList.css';
import Modal from '../UI/Modal/Modal';
import FullProductInfo from '../FullProductInfo/FullProductInfo';
import axios from '../../axios-products';
import Spinner from '../UI/Spinner/Spinner';


class ProductList extends Component {

    state = {
    Products: [],
    selectedProductId: null,
    selectedProductData: null,
    loading: false,
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
        this.setState({loading: true});
        axios.get( '/Products.json' )
        .then( response => {
            this.setState( { Products: response.data, loading: false } );
        } )
        .catch( error => {
            this.setState( { error: true, loading: false } );
        } );
    }


    render () {
        let productList = null;
        let loadMoreBtn = null;

        if(this.state.loading) {
            return  <Spinner/>
        } else {
            productList = (this.state.Products.slice(0, this.state.visible).map((shoes, index) => {
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
            loadMoreBtn = <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
        }

        let fullProductInf = null;
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

export default ProductList;