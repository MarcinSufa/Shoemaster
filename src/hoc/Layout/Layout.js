import React, { Component } from 'react';
import Navbar from '../../Components/Navigation/Navbar/Navbar';
import ProductList from '../../Components/ProductList/ProductList';
import './Layout.css';


class Layout extends Component {

    render () {

        return (
            <React.Fragment>
                <Navbar />
                <div className='Layout'>
                    <ProductList/>
                    {this.props.children}
                </div>
          </React.Fragment>
        )
    }
}


export default Layout;