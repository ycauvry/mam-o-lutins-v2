import {GET_LISTING_DATA, SET_LISTING_TYPE} from "../actions/listingActions";

export const ListingReducer = (state, action) => {
    switch (action.type) {
        case SET_LISTING_TYPE:
            return {
                ...state,
                loading: true,
                listingType: action.payload
            }
        case GET_LISTING_DATA:
            return {
                ...state,
                loading: false,
                listingData: action.payload
            }
        default:
            return state
    }
}