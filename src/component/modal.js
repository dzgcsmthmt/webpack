import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

class Modal extends Component{

    // constructor(props){
    //     super(props);
    //     this.hanlderClose = this.hanlderClose.bind(this);
    // }

    render(){
        let { mask, onClose, onConfirm, className, closeBtn } = this.props;
        return ReactDOM.createPortal(
            <div className={`${mask ? 'modal-backdrop' : ''}`} onClick={onClose}>
                { closeBtn ? <i className="modal-close-btn" onClick={onClose}>x</i>  : null}
                <div className={`modal-content ${className || ""}`}>
                    {this.props.children}
                </div>
            </div>,
            document.getElementById('modal-root')
        );
    }

}

export default Modal;
