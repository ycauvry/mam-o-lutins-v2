import {useContext, useEffect} from "react";
import {ListingContext} from "../../context/ListingContext";

export const useListing = (type) => {
    const {loading, setLoading, listingType, getListingData, listingData} = useContext(ListingContext);

    useEffect(() => {
        setLoading()
        getListingData(type);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);

    return [
        listingType,
        loading,
        listingData
    ]
}
