import React,{useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {getSearchMovie} from '../../redux/movieSelectors'
import MovieCard from '../../components/MovieCard/MovieCard'
import { useParams } from 'react-router-dom';
import preloder from '../../assets/img/preloder4.gif'
import './Search.scss'



function Search() {
    const searchMovie = useSelector(getSearchMovie)
    const pr = useParams()
    console.log(pr)    
    console.log('STATE MOVIE',searchMovie)

    return (
        <div className='movie-page'>
            <h2 className='title-page'>Search</h2>
            <div className='movie-conteiner-item'>
                {searchMovie ? searchMovie.map((item) => <MovieCard key={item.id} {...item} mediaType = 'tv'  />) : <img src={preloder}/>}
            </div>
        </div>
    )
}

export default Search;
