
export const getSearchMovie = ({movieReducer:{searchMovies}})=> {
    return searchMovies.filter((item)=> item.poster_path !== null && item.media_type !== 'person');
};