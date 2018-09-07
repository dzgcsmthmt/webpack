import React,{ Component } from 'react';
import Xhr from './xhr';
import bgImg from '../img/1.jpg';
import { ToastContainer, toast } from 'react-toastify';
import { square } from './math';

export default class App extends Component{
    constructor(){
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount(){
        console.log(square(3));
    }

    clickHandler(){
        import('./print').then(module => {
            var print = module.default;
            print();
        });
    }

    render(){
        return (
            <React.Fragment>
                <h1>Hello React!!!</h1>
                <Xhr ad="dd" />
                <i className="iconfont">&#xe633;</i>
                <a className="btn" onClick={this.clickHandler} >click</a>
                <img src={bgImg} />
            </React.Fragment>
        )
    }
}
