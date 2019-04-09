import React, { Component } from 'react';
import Product from '../Product/Product';
import'./ProductList.css';


class ProductList extends Component {

    state = {
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
        color: 'black',
        madeOf: {
            upper: 'Leather',
            lining: 'Textile',
            outerSole: 'Rubber'
        }
    }

   
    
    render () {
        console.log(Object.keys(this.state.size));
        console.log(this.state.madeOf);
        return (
            <React.Fragment>
             <div className='ShoeDisplayer'> 
                <Product brand={this.state.brand}
                 model={this.state.model} 
                 price={this.state.price}
                 image={this.state.image}
                 size={this.state.size}
                 type={this.state.type}
                 madeOf={this.state.madeOf}
                 />
                   <Product brand={this.state.brand}
                 model={this.state.model} 
                 price={this.state.price}
                 image={this.state.image}
                 size={this.state.size}
                 type={this.state.type}
                 madeOf={this.state.madeOf}
                 />
                   <Product brand={this.state.brand}
                 model={this.state.model} 
                 price={this.state.price}
                 image={this.state.image}
                 size={this.state.size}
                 type={this.state.type}
                 madeOf={this.state.madeOf}
                 />
                   <Product brand={this.state.brand}
                 model={this.state.model} 
                 price={this.state.price}
                 image={this.state.image}
                 size={this.state.size}
                 type={this.state.type}
                 madeOf={this.state.madeOf}
                 />
                   <Product brand={this.state.brand}
                 model={this.state.model} 
                 price={this.state.price}
                 image={this.state.image}
                 size={this.state.size}
                 type={this.state.type}
                 madeOf={this.state.madeOf}
                 />
                   <Product brand={this.state.brand}
                 model={this.state.model} 
                 price={this.state.price}
                 image={this.state.image}
                 size={this.state.size}
                 type={this.state.type}
                 madeOf={this.state.madeOf}
                 />
                </div> 
            
            </React.Fragment>
        )
    }
}


export default ProductList;