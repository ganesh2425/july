import React from 'react'
import Counter from './RBasics/Forms/Counter';
import FormHand from './RBasics/Forms/FormHand';
import MyForm from './RBasics/Forms/MyForm';
function App() {
    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
        <a href="/" className="navbar-expand">Forms</a>    
        </nav>
        <Counter /> <hr/>
        <FormHand /> <hr/>
        <MyForm />
        </>
    )
}

export default App
