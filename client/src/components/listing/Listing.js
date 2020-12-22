import React from "react";
import {ListingDef} from "../../utils/ListingDefinitions";
import ListingTable from "./ListingTable";
import "../../styles/listing/Listing.css";
import {useListing} from "../../hooks/listing/useListing";

const Listing = ({type}) => {
    const [listingType, loading] = useListing(type);
    if (!loading) {
        return (
            <>
                <h1 className="listing-title">Gestion des {ListingDef[listingType].title}</h1>
                <ListingTable/>
            </>
        )
    }
    return null;
}

export default Listing;
