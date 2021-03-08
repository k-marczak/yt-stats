import React, { Component } from 'react'

class Results extends Component {
    render() {
        return(
          <div className="w-full container mx-auto m-24">
            <div id="tags">
                <div class="px-2">
                    <div class="flex -mx-2">
                       <div className="w-1/2 px-2">
                           <div className="bg-gray-400 h-12"></div>
                       </div>
                       <div className="w-1/2 px-2">
                           <div className="bg-gray-500 h-12"></div>
                       </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default Results