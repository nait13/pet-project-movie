import React, { useState } from 'react';
import logo from '../../assets/img/video.png';
import { Link ,useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import apiConfig from '../../api/apiConfig';
import './Navbar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { searchMovieFetchData } from '../../redux/movieActions';


const Navbar = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [showLinks, setShowLinks] = useState(false);

    const [search,setSearch] = useState('')

    const handleSearch = ({target:{value}}) => {
        setSearch(value)
    }

    const handlSearch = () => {
        if(search.trim().length>0){
            dispatch(searchMovieFetchData(`
                https://api.themoviedb.org/3/search/multi?api_key=${apiConfig.apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
            ))
            navigate(`/search/${search}`)
        }
        setSearch('')
    }

    console.log("RERENDER NAVBAR")
    return (
        <div className='nav-wrapper'>
            <div className='container'>
                <div className='nav'>
                    <Link to={'/'} className='logo' onClick={()=>{window.scroll(0,0)}}>
                        <i className='bx bx-movie-play bx-tada main-color'>Cinema<img src={logo}/><span className='main-color'>BOX</span></i>
                    </Link>
                        <ul className={`nav-menu ${showLinks? 'active' : ''}`} >
                            <li>
                            <div className='search-box'>
                                <input className='search-text' type='text' placeholder='Search...' onChange={handleSearch} value={search}/>
                                <div className='search-btn' onClick={handlSearch}>
                                    <i><SearchIcon/></i>
                                </div>
                            </div>
                            </li>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/movies'}>Movie</Link></li>
                            <li><Link to={'/series'}>Tv Serias</Link></li>
                            
                            {/* ***SING IN**** */}
                            
                            {/* <li>
                                <a href='#' className='btn small'>
                                    <span>Sing in</span>
                                </a>
                            </li> */}
                        </ul>
                    <div className='hamburger-menu' id='hamburger-menu' onClick={()=>setShowLinks(!showLinks)}>
                        <div className='hamburger'><MenuIcon fontSize='large'/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
