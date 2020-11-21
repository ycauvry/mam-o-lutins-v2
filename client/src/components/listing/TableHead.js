import React, {useContext} from "react";
import {ListingDef} from "../../utils/ListingDefinitions";
import {ListingContext} from "../../context/ListingContext";

const TableHead = () => {
    const {listingType} = useContext(ListingContext);
    return (
        <thead>
            <tr>
                {Object.values(ListingDef[listingType].table_head).map((heading, idx) => {
                    return <th key={`heading-${idx}`}>{heading}</th>
                })}
                <th>Actions</th>
            </tr>
        </thead>
    )
}

export default TableHead;