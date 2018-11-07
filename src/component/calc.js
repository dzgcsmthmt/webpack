import React, { Component } from 'React';
import ChildCom from './child';
class Calc extends Component{
    constructor(props){
        super(props);
        this.state = {isWidthInit: false,eleWidth: 0};
    }

    componentDidMount(){
        console.log(this.ele);
        let w = this.ele.offsetWidth;
        if(w > 0){
            this.setState({isWidthInit: true,eleWidth: w});
        }
    }
    render(){
        return (
            <React.Fragment>
            {
                !this.state.isWidthInit ?
                <div className="m-auto">
                    <div className="child" ref={(ele) => {this.ele = ele}}></div>
                </div>
                : <ChildCom eleWidth={this.state.eleWidth} />
            }

            </React.Fragment>
        )
    }
}

export default Calc;
