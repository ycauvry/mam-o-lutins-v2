import {GET_LISTING_DATA, SET_LOADING} from "../actions/listingActions";

export const ListingReducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true,
                listingData: []
            }
        case GET_LISTING_DATA:
            return {
                ...state,
                loading: false,
                listingType: action.payload.listingType,
                listingData: action.payload.data
            }
        default:
            return state
    }
}
