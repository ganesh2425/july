import React from "react";
class FormHand extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username: "",
            password: "",
            topic: "React"
        }
    }
usernameHandler=(event)=>{
    this.setState({username: event.target.value})
};
passwordHandler=(event)=>{
    this.setState({password: event.target.value})
};
topicHandler=(event)=>{
    this.setState({topic: event.target.value})
};
submitHandler=(event)=>{
    alert("submitting " + this.state.username + this.state.password + this.state.topic)
    event.preventDefault();
    
}
    render(){
        return(<>
        <h2 className="text-primary">Login</h2>
        <form onSubmit={this.submitHandler}>
            <label>UserName</label>
            <input
            type="text"
            value={this.state.username}
            onChange={this.usernameHandler}/> <br/>
            <label>Password</label>
            <input
            type="password"
            value={this.state.password}
            onChange={this.passwordHandler}/> <br/>
            <label>Topic</label>
            <select
            value={this.state.topic}
            onChange={this.topicHandler}>
                <option value="react">React</option>
                <option value="veu">Veu</option>
                <option value="angular">Angular</option>
            </select> <br/>
            <button className="btn btn-success">submit</button>
        </form>
        </>);
    }
}
export default FormHand;