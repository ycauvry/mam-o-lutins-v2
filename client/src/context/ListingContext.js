import React, {createContext, useReducer} from "react";
import {ListingReducer} from "./ListingReducer";
import {listObjects} from "../utils/Api";
import {GET_LISTING_DATA, SET_LISTING_TYPE} from "../actions/listingActions";
import {ListingDef} from "../utils/ListingDefinitions";

const initialState = {
    listingType: '',
    listingData: [],
    loading: true
}

export const ListingContext = createContext(initialState);

export const ListingProvider = ({children}) => {
    const [state, dispatch] = useReducer(ListingReducer, initialState);

    const setListingType = (type) => {
         dispatch({
            type: SET_LISTING_TYPE,
            payload: type
        })
    }

    const getListingData = async (listingType) => {
        if (ListingDef.hasOwnProperty(listingType)) {
            try {
                const data = await listObjects(listingType);
                dispatch({
                    type: GET_LISTING_DATA,
                    payload: data
                })
            } catch (err) {

            }
        }
    }

    const contextValue = {
        setListingType,
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