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
    loading: false
    }
   
    productSelectedHandler = (id, shoes) => { 
        this.setState({selectedProductId: id});
         this.setState({selectedProductData: shoes});
        console.log(this.state.selectedProductData);
        console.log(this.state.selectedProductId);
    }

    productSelectCancelHandler = () => {
        this.setState({selectedProductId: null});
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
        console.log(Object.keys(this.state.Products));
      
      let productList = null;
        if(this.state.loading) {
           return  <Spinner/>
        } else {
            productList = (this.state.Products.map((shoes, index) => {
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
                    
            </React.Fragment>
        )
    }
}


export default ProductList;