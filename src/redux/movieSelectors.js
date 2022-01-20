
export const getSearchMovie = ({movieReducer:{searchMovies}})=> {
    return searchMovies.filter((item)=> item.poster_path !== null && item.media_type !== 'person');
};

export const getMovieData = (({movieReducer:{dataMovie}})=>{
    return dataMovie.results?.filter((item)=> item.poster_path !== null)
})

export const getPageNumber = (({movieReducer:{dataMovie}})=>{
    return dataMovie.total_pages
})