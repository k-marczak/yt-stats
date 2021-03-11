import React, { Component } from 'react'

class Form extends Component {
    state = {
        term: ''
    }
    handleChange = event => {
        this.setState({
            term: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleFormSubmit(this.state.term)
    }

    render(){
        return(
            <>
            <h3 className="text-4xl text-center my-16">Statystyki Youtuba</h3>
            <p className="text-2xl text-center my-16">ID to fragment adresu URL znajdujący się po znaku '='</p>
            <form className="w-full max-w-xl mx-auto" onSubmit={this.handleSubmit}>
                <div className="flex items-center border-b border-b-2 border-red-700 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                     type="text" 
                     placeholder="Wpisz ID filmu"
                     value={this.state.term} onChange={this.handleChange} />
                </div>
            </form>
            </>
        )
    }
}

export default Form