import React, {useContext} from "react";
import {ListingContext} from "../../context/ListingContext";
import {Link} from 'react-router-dom';
import {ListingDef} from "../../utils/ListingDefinitions";

const ListingCellAction = ({id}) => {
    const {listingType} = useContext(ListingContext);
    const editPath = ListingDef[listingType].editPath;

    return (
        <td className="action-cell">
            <Link to={editPath + id}>
                <i className="far fa-edit"/>
            </Link>
        </td>
    )
}

export default ListingCellAction;
