import React from 'react'

function Info(props) {
    return(
        <div className="w-1/2 px-2 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">

                
                <div style={{fontSize: '40px', position: 'relative', right: '20px'}} className="font-bold  text-xl mb-2 p-4">Informacje</div>
                <div><strong>NAZWA KANAŁU: &emsp; </strong><span
                className="text-gray-700 text-base">{props.channelTitle}</span></div>


                <div className="font-bold text-xl mb-2 p-4"></div>
                <div><strong>TYTUŁ VIDEO: &emsp;</strong><span 
                className="text-gray-700 text-base">{props.title}</span></div>


                <div className="font-bold text-xl mb-2 p-4"></div>
                <div><strong>WYŚWIETLENIA: &emsp;</strong><span
                className="text-gray-700 text-base">{props.views}</span></div>
            
            </div>
        </div>
    )
}

export default Info