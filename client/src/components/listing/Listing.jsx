import React from 'react';
import '../../styles/components/listing/Listing.css'

const Listing = ({type}) => {
    return (
        <div className="container">
            <div id="listing">
                <h1 className="title">{type}</h1>
            </div>
        </div>
    )
}

export default Listing;