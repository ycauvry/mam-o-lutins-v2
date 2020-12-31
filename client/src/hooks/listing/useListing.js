import {useContext, useEffect} from "react";
import {ListingContext} from "../../context/ListingContext";

export const useListing = (type) => {
    const {loading, setLoading, listingType, getListingData, listingData} = useContext(ListingContext);

    useEffect(() => {
        getListingData(type);

        return () => setLoading();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);

    return [
        listingType,
        loading,
        listingData
    ]
}
