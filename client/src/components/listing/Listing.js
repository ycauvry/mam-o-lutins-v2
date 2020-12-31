import React from "react";
import {ListingDef} from "../../utils/ListingDefinitions";
import ListingTable from "./ListingTable";
import "../../styles/listing/Listing.css";
import {useListing} from "../../hooks/listing/useListing";
import AddButton from "./AddButton";

const Listing = ({type}) => {
    const [listingType, loading] = useListing(type);
    const editPath = listingType ? ListingDef[listingType].editPath : null;

    if (!loading) {
        return (
            <>
                <h1 className="title listing-title">{ListingDef[listingType].title}</h1>
                <ListingTable/>
                <AddButton btnLabel={ListingDef[listingType].addBtnLabel} editPath={editPath}/>
            </>
        )
    }
    return null;
}

export default Listing;
