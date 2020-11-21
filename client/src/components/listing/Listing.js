import React, {useContext, useEffect} from "react";
import {ListingDef} from "../../utils/ListingDefinitions";
import ListingTable from "./ListingTable";
import "../../styles/listing/Listing.css";
import {ListingContext} from "../../context/ListingContext";

const Listing = React.memo(({type}) => {
    const {loading, setListingType, listingType, getListingData} = useContext(ListingContext);

    useEffect(() => {
        setListingType(type);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);

    useEffect(() => {
        getListingData(listingType);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listingType]);

    if (!loading) {
        return (
            <>
                <h1 className="listing-title">Gestion des {ListingDef[listingType].title}</h1>
                <ListingTable/>
            </>
        )
    }
})

export default Listing;