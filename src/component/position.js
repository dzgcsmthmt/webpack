import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

class Position extends Component {
    constructor(props){
        super(props);
        this.notify = this.notify.bind(this);
    }
    notify(){
        toast("Default Notification !");

        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_CENTER
        });

        toast.error("Error Notification !", {
            position: toast.POSITION.TOP_LEFT
        });

        toast.warn("Warning Notification !", {
            position: toast.POSITION.BOTTOM_LEFT
        });

        toast.info("Info Notification !", {
            position: toast.POSITION.BOTTOM_CENTER
        });

        toast("Custom Style Notification with css class!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'foo-bar'
        });
    };

    render(){
        return (
            <React.Fragment>
                <button onClick={this.notify}>
                    Notify
                </button>
                <ToastContainer />
            </React.Fragment>
        )
    }
}

export default Position;
