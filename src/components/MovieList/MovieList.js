import React, { useEffect, useState } from 'react'
import apiConfig from '../../api/apiConfig';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss'
import "swiper/css";
import "swiper/css/pagination"





const MovieList = (props) => {
    const itemsData = props.data
    const mediaType = props.mediaType
    const [items, setItems] = useState([]);




return (
    <div className='movie-list'>
        <Swiper
            slidesPerView={'auto'} 
            spaceBetween={0} 
            className="mySwiper">
            {
                itemsData?.map((item, i) => (
                    <SwiperSlide key={i}>
                        <MovieCard {...item }  mediaType = {mediaType}  />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
)
}

export default MovieList



// export function fetchApp(url, payload) {
//     return (dispatch) => {
//         fetchRequest();
//         const status = function (response) {
//             if (response.status !== 200) {
//                 return Promise.reject(new Error(response.statusText));
//             }
//             return Promise.resolve(response);
//         };
//         const json = function (response) {
//             return response.json();
//         };
//         fetch(url, {
//             method: 'post',
//             credentials: 'same-origin'
//         })
//             .then(status)
//             .then(json)
//             .then(function (data) {
//                 let currentComponent = setComponent(data);
//                 dispatch(fetchSuccess(currentComponent));
//                 console.log('data', data);
//             })

//     };
// }