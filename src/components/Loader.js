import React from 'react'

function Loader() {
    return (
        <div className='loader'>
            <div className="wrapper">
                <svg>
                    <rect x="0px" y="0px" width="100" height="100" />
                </svg>
            </div>
                <h3>Loading..</h3>
        </div>
    )
}

export default Loader
