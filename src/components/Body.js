import React, { Component } from 'react'
import Form from './Form'
import Results from './Results'

class Body extends Component {
    render(){
        return(
            <div className="w-full container mx-auto my-12">
                <Form />
                <Results />
            </div>
        )
    }
}

export default Body