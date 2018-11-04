import React,{ Component } from 'react';
import Xhr from './xhr';
import bgImg from '../img/1.jpg';
import Modal from './modal';
import { square } from './math';

export default class App extends Component{
    constructor(){
        super();
        this.clickHandler = this.clickHandler.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
        this.state = {showModal: false};
    }

    componentDidMount(){
        console.log(square(3));
    }

    clickHandler(){
        //loay loading
        // import('./print').then(module => {
        //     var print = module.default;
        //     print();
        // });
        this.setState({showModal: !this.state.showModal});
    }

    onCloseModal(){
        console.log('closed');
        this.setState({showModal: false});
    }

    onConfirm(){
        console.log('confirmed');
        this.setState({showModal: false});
    }

    render(){
        return (
            <React.Fragment>
                <h1>Hello React!!!</h1>
                <Xhr ad="dd" />
                <i className="iconfont">&#xe633;</i>
                <a className="btn" onClick={this.clickHandler} >click</a>
                { this.state.showModal ?
                    <Modal mask closeBtn
                        onClose={this.onCloseModal}
                        onConfirm={this.onConfirm}>
                        <div>this is a modal</div>
                    </Modal> : null }
            </React.Fragment>
        )
    }
}
