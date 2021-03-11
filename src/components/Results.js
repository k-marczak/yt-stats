import React, { Component } from 'react'
import Info from './metrics/Info'
import Tags from './metrics/Tags'

class Results extends Component {
    render() {
        return(
          <div className="w-full container mx-auto m-24">
            <div id="tags">
                <div className="px-2">
                    <div className="flex -mx-2">
                       <Tags tags={this.props.tags} />
                       <Info title={this.props.title}
                channelTitle={this.props.channelTitle} views={this.props.views} />
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default Results