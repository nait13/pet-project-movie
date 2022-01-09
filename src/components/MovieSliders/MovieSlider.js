import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useNavigate } from 'react-router';
import apiConfig from '../../api/apiConfig';
import Button from '../Button/Button';
import  './MovieSlider.scss'
import "swiper/css";
import "swiper/css/navigation"
import MovieList from '../MovieList/MovieList';



const MovieSlider = () => {
    SwiperCore.use([Navigation]);

    const [movieItems, setMovieItems] = useState([]);

    const sliderHederItems = movieItems.slice(1,4)
    
    useEffect(() => {
        const page = 1;
        
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiConfig.apiKey}&language=en-US&page=${page}`)
        .then((respons)=>respons.json())
        .then(({results})=>setMovieItems(results))
        .catch((er)=>console.log('ERROR',er));
    }, []);

    console.log('MOVIE ITEM',movieItems)
    return (
        <div className="slider-section">
            <div className='hero-slider'>
                <Swiper
                    navigation={true}
                    className="mySwiper"
                    spaceBetween={0}
                    slidesPerView={1}
                >
                    {
                        sliderHederItems?.map((item, i) => (
                            <SwiperSlide key={i}>
                                {({ isActive }) => (
                                    <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                                )}
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div>
                <MovieList data = {movieItems} mediaType = 'movie'/>
            </div>
        </div>
    )
}



const HeroSlideItem = (props) => {

    let navigate = useNavigate();

    const item = props.item;
    const background = apiConfig.originalImag(item.backdrop_path ? item.backdrop_path : item.poster_path);

    return (
        <div
            className={`movie-slider__item ${props.className}`}
            style={{backgroundImage: `url(${background})`}}
        >
                <div className="movie-slider__item__content">
                    <span className="title">{item.title}</span>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => navigate('/movie/' + item.id)}>
                            Watch now
                        </Button>
                    </div>
                </div>
                <div className="movie-slider__item__content__poster">
                    <img src={apiConfig.w300Imag(item.poster_path)} alt={`${item.title}`} />
                </div>
        </div>
    )
}


export default MovieSlider
