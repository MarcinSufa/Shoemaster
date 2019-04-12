import React, { Component } from 'react';
import Product from '../Product/Product';
import'./ProductList.css';
import Modal from '../UI/Modal/Modal';
import FullProductInfo from '../FullProductInfo/FullProductInfo';

class ProductList extends Component {

    state = {
        Products: [
        {
            id: 1,
            brand: 'Nike',
            model: 'Free x Metcon M',
            price: 150, 
            image: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/pl689uvafiyu8oh1mmtl/free-x-metcon-cross-training-weightlifting-shoe-VKoLdD.jpg',
            size: {
                40: 12,
                41: 20,
                42: 18, 
                43: 5
            },
            type: 'Sports Shoes',
            color: 'Black',
            madeOf: {
                upper: 'Leather',
                lining: 'Textile',
                outerSole: 'Rubber'
            },
        },
        {
        id: 2,
        brand: 'Nike',
        model: 'Air Force 1 07',
        price: 199, 
        image: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/gsuin11ptg5qgktmzoat/buty-air-force-1-07-v2TERGb4.jpg',
        size: {
            40: 30,
            41: 15,
            42: 4, 
            43: 1,
        },
        type: 'Sports Shoes',
        color: 'White',
        madeOf: {
            upper: 'Leather',
            lining: 'Textile',
            outerSole: 'Leather'
         }
        }
    ],
    selectedProductId: null,
    selectedProductData: null
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
    
    render () {
        console.log(Object.keys(this.state.Products));
      

       let productList= ( this.state.Products.map((shoes, index) => {
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

        let fullProductInf = null;
        if (this.state.selectedProductId != null) {
             fullProductInf = (
                 <Modal modalClosed={this.productSelectCancelHandler}>
                <FullProductInfo 
                id={this.state.selectedProductId}
                brand={this.state.selectedProductData.brand}
                model={this.state.selectedProductData.model} 
                price={this.state.selectedProductData.price}
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