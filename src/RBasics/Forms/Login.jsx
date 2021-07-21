import React from "react";
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {message:""}
    };
changeHandler (){
    this.setState({message: "Good Night Sweet Dreams "})
}
    render(){
        return(<>
        <h2>hey {this.state.message} </h2>
        <button
        onChange={this.changeHandler}>change</button>

        </>);
    }
}
export default Login;