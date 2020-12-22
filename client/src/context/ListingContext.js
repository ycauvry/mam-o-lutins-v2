import React, {createContext, useReducer} from "react";
import {ListingReducer} from "./ListingReducer";
import {listObjects} from "../utils/Api";
import {GET_LISTING_DATA, SET_LOADING} from "../actions/listingActions";

const initialState = {
    listingType: '',
    listingData: [],
    loading: true
}

export const ListingContext = createContext(initialState);

export const ListingProvider = ({children}) => {
    const [state, dispatch] = useReducer(ListingReducer, initialState);

    const setLoading = () => {
         dispatch({
            type: SET_LOADING
        })
    }

    const getListingData = async (listingType) => {
        try {
            const data = await listObjects(listingType);
             dispatch({
                type: GET_LISTING_DATA,
                payload: {data, listingType}
            })
        } catch (err) {

        }
    }

    const contextValue = {
        setLoading,
        getListingData,
        listingType: state.listingType,
        listingData: state.listingData,
        loading: state.loading
    }

    return (
        <ListingContext.Provider value={contextValue}>
            {children}
        </ListingContext.Provider>
    )
}
