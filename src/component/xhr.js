import React,{ Component } from 'react';
import axios from 'axios';

export default class Xhr extends Component{

    componentDidMount(){
        console.log(axios.create({}));
    }
    render(){
        return (
            <h1>axios</h1>
        )
    }
}
