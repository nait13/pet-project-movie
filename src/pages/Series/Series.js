import React, { useState , useEffect ,useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {getMovieData,getPageNumber} from '../../redux/movieSelectors'
import MovieCard from '../../components/MovieCard/MovieCard'
import apiConfig from '../../api/apiConfig'
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import Genres from '../../components/Genres/Genres'
import useGenre from '../../components/hooks/useGenre.js'
import { getDataMovie } from '../../redux/asyncAction/asyncAction';
import preloder from '../../assets/img/preloder4.gif'
import './Series.scss'


export default function Movies() {
  const [page, setPage] = useState(1);
  const [dataMovie, setDataMovie] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState();
  const ref = useRef(dataMovie);
  const [input,setInput] = useState('');
  const genreforUrl = useGenre(selectedGenres)

  const dispatch = useDispatch()
    
  console.log(preloder)
  const movieItemsData = useSelector(getMovieData)
  const namberOfpages = useSelector(getPageNumber)

  console.log('SATTEMOVIE',movieItemsData);  

  useEffect(()=>{
    dispatch(getDataMovie(`https://api.themoviedb.org/3/discover/tv?api_key=${apiConfig.apiKey}&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforUrl}`))

  },[page,genreforUrl])

    
  const handl = ({target:{value}}) =>{
    setInput(value)
  }

  const handlPageChange = (e) => {
    console.log(e.target.textContent)
    setPage(e.target.textContent)
    window.scroll(0,0);
}
    console.log(selectedGenres)
    return (
        <div className='movie-page'>
            <h2 className='title-page'>Movies</h2>
            <Genres 
              type = 'tv' 
              selectedGenres = {selectedGenres}
              genres = {genres}
              setGenres = {setGenres} 
              setPage = {setPage}
              setSelectedGenres = {setSelectedGenres}/>
            <div className='movie-conteiner-item'>
                {movieItemsData ? movieItemsData.map((item) => <MovieCard key={item.id} {...item} mediaType = 'tv'  />) : <img src={preloder}/>}
            </div>
            <CustomPagination handlPageChange={handlPageChange} numberOfPages={namberOfpages}/>
        </div>
    )
}
