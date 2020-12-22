import React, {useContext} from "react";
import {ListingDef} from "../../utils/ListingDefinitions";
import {ListingContext} from "../../context/ListingContext";

const TableHead = () => {
    const {listingType} = useContext(ListingContext);
    const headings = Object.values(ListingDef[listingType].tableHead);
    return (
        <thead>
            <tr>
                {headings.map((heading, idx) => <th key={`heading-${idx}`}>{heading}</th>)}
                <th>Actions</th>
            </tr>
        </thead>
    )
}

export default TableHead;
