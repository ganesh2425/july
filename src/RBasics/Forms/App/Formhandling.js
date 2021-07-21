import React, { Component } from 'react';
class App extends Component {
constructor(props){
  super(props)
  this.state={
    email:"",
    password:""
  }
}
emailHandler=(event)=>{
  this.setState({email:event.target.value})
}
passwordHandler=(event)=>{
  this.setState({password:event.target.value})
}

    render() {
        return (
            <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">
            React Form handling
        </a>    
        </nav>
        <form>
            <label>Email</label>
            <input 
            type="text" 
            value={this.state.email} 
            onChange={this.emailHandler}/> <br />
            <label>Password</label>
            <input 
            type="password" 
            value={this.state.password} 
            onChange={this.passwordHandler}/> <br />
            <input type="submit" value="submit"/>
        </form>
            </div>
        )
    }
}

export default App;