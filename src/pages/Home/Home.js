import { Container } from '@mui/material'
import React,{useEffect,useState} from 'react'
import MovieSlider from '../../components/MovieSliders/MovieSlider'
import MovieList from '../../components/MovieList/MovieList'
import apiConfig from '../../api/apiConfig'
import Trending from '../Trending/Trending'
import './Home.scss'
import "swiper/css";
import "swiper/css/navigation"


const Home = () => {
    const [popularTV, setPopularTV] = useState([])
    const [topRated , setTopRated] = useState([])
    const [topRatedTv,settopRatedTv] = useState([])

      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiConfig.apiKey}&language=en-US&page=1`)
        .then((respons)=>respons.json())
        .then(({results}) => setPopularTV(results))
    
      },[])

      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiConfig.apiKey}&language=en-US&page=1`)
        .then((respons)=>respons.json())
        .then(({results}) => setTopRated(results))

      },[])

      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiConfig.apiKey}&language=en-US&page=1`)
        .then((respons)=>respons.json())
        .then(({results}) => settopRatedTv(results))

      },[])


      console.log('TOP RATED',topRatedTv)

    return (
        <>
            <MovieSlider/>
            <div className='section'>
                <div className='container'>
                    <div className='section-header'>
                        Top Rated Movies
                    </div>
                    <div className='movies-slider'>
                        <MovieList data = {topRated}  mediaType = 'movie'/>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='container'>
                    <div className='section-header'>
                        Trending Tv
                    </div>
                    <div className='movies-slider'>
                        <MovieList data = {popularTV}  mediaType = 'tv'/>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='container'>
                    <div className='section-header'>
                        Top Rated Tv
                    </div>
                    <div className='movies-slider'>
                        <MovieList data = {topRatedTv}  mediaType = 'tv'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
