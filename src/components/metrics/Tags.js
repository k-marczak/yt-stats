import React from 'react'

function Tags(props) {
    var tags = props.tags.map(function(tag, i){
        return <li style={{marginTop: '20px'}}> - {tag}</li>
    })
    return(
        <div  className="w-1/2 px-2 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div style={{fontSize: '40px', position: 'relative', right: '20px'}} className="font-bold text-xl mb-2 p-4">Tagi</div>
                <ul className="text-gray-700 text-base p-4 ">{tags}</ul>

            </div>
        </div>
    )
}

export default Tags