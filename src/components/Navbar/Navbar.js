import React, { useState , useEffect } from 'react';
import logo from '../../assets/img/video.png';
import { Link ,useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import apiConfig from '../../api/apiConfig';
import './Navbar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { searchMovieFetchData } from '../../redux/asyncAction/asyncAction';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import Modal from '../Modal/Modal';
import SpeachSearch from '../../utils/SpeachSerch';


const Navbar = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [showLinks, setShowLinks] = useState(false);

    const [search,setSearch] = useState('')

    const [modalActiv , setModalActiv] = useState(false);



    const handleSearch = ({target:{value}}) => {
        setSearch(value)
    }

    // useEffect(()=>{
    //     handlFetchSearch()
    // },[search])
    
    const handlFetchSearch = () => {
        if(search.trim().length>0){
            dispatch(searchMovieFetchData(`
                https://api.themoviedb.org/3/search/multi?api_key=${apiConfig.apiKey}&language=en-EN&query=${search}&page=1&include_adult=false`
            ))
            setShowLinks(false)
            navigate(`/search/${search}`)
            
        }
        setSearch('')
    }

    const handlClickModal = () => {
        setModalActiv(!modalActiv)
    }


    console.log("RERENDER NAVBAR",search)
    return (
        <div className='nav-wrapper'>
            <div className='container'>
                <Modal active = {modalActiv} setActive = {setModalActiv}>
                    <SpeachSearch poisk = {setSearch} search = {handlFetchSearch}/>
                </Modal>
                <div className='nav'>
                    <Link to={'/'} className='logo' onClick={()=>{window.scroll(0,0)}}>
                        <i className='bx bx-movie-play bx-tada main-color'>Cinema<img src={logo}/><span className='main-color'>BOX</span></i>
                    </Link>
                        <ul className={`nav-menu ${showLinks? 'active' : ''}`} >
                            <li>
                            <div className='search-box'>
                                <input className='search-text' type='text' placeholder='Search...' onChange={handleSearch} value={search}/>
                                <div className={`search-btn micro${modalActiv ? ` activ`: ''}`} onClick={handlClickModal}>
                                    <i>{modalActiv? <MicIcon/> : <MicOffIcon/>}</i>
                                </div>
                                <div className='search-btn' onClick={handlFetchSearch}>
                                    <i><SearchIcon/></i>
                                </div>
                            </div>
                            </li>
                            <li><Link onClick={()=>setShowLinks(false)} to={'/'}>Home</Link></li>
                            <li><Link onClick={()=>setShowLinks(false)} to={'/movies'}>Movie</Link></li>
                            <li><Link onClick={()=>setShowLinks(false)} to={'/series'}>Tv Serias</Link></li>
                            
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
