import React, { Component } from 'react'
import Form from './Form'
import Results from './Results'
import youtube from '../supports/youtube'

class Body extends Component {
    state = {

    }
    handleSubmit = async (term) => {
        const response = await youtube.get('/videos',{
            params: {
                id: term
            }
        })
        
        this.setState({
            everything: response.data.items
        })
    }
     
    render(){
        return(
            <div className="w-full container mx-auto my-12">
                <Form handleSubmit={this.handleSubmit}/>
                <Results />
            </div>
        )
    }
}
 
export default Body