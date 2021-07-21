import React from "react";
class MyForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            age:""
        }
    };
changeHandler=(event)=>{
    let name= event.target.name
    let val= event.target.value
    this.setState({[name]:val})
}
    render(){
        return(<>
        <h2 className="text-warning">MyForm {this.state.name} {this.state.age}</h2>
        <form>
            <label>Name</label>
            <input
            type="text"
            name="name"
            onChange={this.changeHandler}/> <br/>
            <label>Age</label>
            <input
            type="text"
            name="age"
            onChange={this.changeHandler}/>

        </form>
        </>);
    }
}
export default MyForm;