import React,{useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {getSearchMovie} from '../../redux/movieSelectors'
import MovieCard from '../../components/MovieCard/MovieCard'
import './Search.scss'

function Search() {
    const searchMovie = useSelector(getSearchMovie)
    
    console.log('STATE MOVIE',searchMovie)

    return (
        <div className='movie-page'>
            <h2 className='title-page'>Search</h2>
            <div className='movie-conteiner-item'>
                {searchMovie ? searchMovie.map((item) => <MovieCard key={item.id} {...item} mediaType = 'tv'  />) : 'Loding...'}
            </div>
        </div>
    )
}

export default Search;
