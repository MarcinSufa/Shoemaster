import React, { Component } from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {

    render () {
        let modalClass = 'Modal ';
        if (this.props.className) {
            modalClass += this.props.className;
        }

        return (
            <React.Fragment>
                <Backdrop  clicked={this.props.modalClosed} />
                <div className={modalClass}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}


export default Modal; 