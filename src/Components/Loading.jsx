import React from 'react'
import loadinggif from '../images/gif/loading-arrow.gif'

function Loading() {
    return (
        <div className='loading'>
            <h4>roomd loading data..</h4>
            <img src={loadinggif} alt="Loadinggif" />
            
        </div>
    )
}

export default Loading
