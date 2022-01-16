import { movieActionTypes } from "./movieActionTypes"


const initialstate = {
    searchMovies:[],
}


export const movieReducer = (state = initialstate , action) => {
    switch (action.type) {
        case movieActionTypes.SEARCH_SUCCESS:
            return {
                ...state,
                searchMovies:[...action.payload.dataMovie]
            }
        default:
            return state;

    }
}