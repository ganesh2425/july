import React from "react";
class App extends React.Component{
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
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className="navbar-brand">Counter</a>
        </nav>
        <h2>Hello Counter {this.state.counter}</h2>
        <button onClick={this.incrHandler} className="btn btn-success mr-4">Incr</button>
        <button onClick={this.decrHandler} className="btn btn-danger">Decr</button>
        </>);
    }
}
export default App;