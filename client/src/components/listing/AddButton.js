import React from "react";
import {Link} from 'react-router-dom';

const AddButton = ({btnLabel, editPath}) => {
    return (
        <div className="listing-add-wrapper">
            <Link to={editPath + 'ajouter'} className="button listing-add-button">
                <i className="fas fa-plus"/>
                <span>{btnLabel}</span>
            </Link>
        </div>
    )
}

export default React.memo(AddButton);
