import { movieActionTypes } from "./movieActionTypes"


const initialstate = {
    searchMovies:[],
    dataMovie:[],
}


export const movieReducer = (state = initialstate , action) => {
    switch (action.type) {
        case movieActionTypes.SEARCH_SUCCESS:
            return {
                ...state,
                searchMovies:[...action.payload.dataMovie]
            }

        case movieActionTypes.MOVIE_SUCCESS:
            return {
                ...state,
                dataMovie:{...action.payload.dataMovie}            
            }
        default:
            return state;

    }
}