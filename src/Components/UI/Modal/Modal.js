import React, { Component } from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {

    render () {
        return (
            <React.Fragment>
                <Backdrop  clicked={this.props.modalClosed} />
                <div className={'Modal'+' '+ this.props.className}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}


export default Modal; 