import React, { Component } from 'react';
import Navbar from '../../Components/Navigation/Navbar/Navbar';
import './Layout.css';


class Layout extends Component {

    render () {

        return (
            <React.Fragment>
                <Navbar />
                <div className='Layout'>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}


export default Layout;