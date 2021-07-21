import React from "react";
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={counter: 0}
    }
incrHandler=()=>{
    this.setState({counter: this.state.counter +1})
}
decrHandler=()=>{
    this.setState({counter: this.state.counter -1})
}
    render(){
        return(<>
        <h1 className="text-danger">Counter</h1>
        <h2>Counter starts {this.state.counter}</h2>
        <button onClick={this.incrHandler} className="btn btn-success mr-4">Incr</button>
        <button onClick={this.decrHandler} className="btn btn-danger">Decr</button>
        </>);
    }
}
export default Counter;