import React from 'react'
import apiConfig from '../../api/apiConfig'
import './MovieCard.scss';
import { useNavigate , Link} from 'react-router-dom';
import star from '../../assets/img/star.png'
import notPoster from '../../assets/img/posterNot.jpg'

const ratedColor = (number) => {
    if(number <= 5) return 'red'
    if(number < 7) return 'yellow'
    else{return 'green'}
}


export default function MovieCard({ id, poster_path, title, release_date, media_type, vote_average, original_name ,backdrop_path , mediaType , name}) {

    const link = `/${media_type || mediaType}/${id}`
    const img = `${poster_path ? apiConfig.w300Imag(poster_path) :  apiConfig.w300Imag(backdrop_path)}`;
    return (
        <Link to={link}>
            <div className='movie-item'>
                <img src={img ? img:notPoster} alt={title}/>
                <div className='movie-item-content'>
                    <div className='movie-item-tittle'>
                        {name || title || original_name  }
                    </div>
                    <div className='movie-infos'>
                        <i className='star'>
                            <img src={star} alt='star'/>
                        </i>
                        <span style={{color:`${ratedColor(vote_average)}`}}>{vote_average === 0 ? '':vote_average }</span>
                    </div>  
                </div>
            </div>
        </Link>
    )
}


// const MovieCard = props => {

//     const item = props.item;

//     const link = '/' + category[props.category] + '/' + item.id;

//     const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

//     return (
//         <Link to={link}>
//             <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
//                 <Button>
//                     <i className="bx bx-play"></i>
//                 </Button>
//             </div>
//             <h3>{item.title || item.name}</h3>
//         </Link>
//     );
// }

// export default MovieCard;