import { movieActionTypes } from "./movieActionTypes"


const initialstate = {
    searchMovies:[],
    dataMovie:[],
    selectedGenres:[],
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

        // case movieActionTypes.ADD_SELECTED_GENRES:
        //     return {
        //         ...state,
        //         selectedGenres:[...state.selectedGenres ,action.payload]
        //     } 
        // case movieActionTypes.DELETE_SELECTED_GENRES:
        //     return {
        //         ...state,
        //         selectedGenres:[...state.selectedGenres.filter((item)=> item.id !== action.payload.deleteId )]
        //     }

        default:
            return state;

    }
}