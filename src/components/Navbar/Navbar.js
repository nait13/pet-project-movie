import React, { useState } from 'react'
import logo from '../../assets/img/video.png'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);


    return (
        <div className='nav-wrapper'>
            <div className='container'>
                <div className='nav'>
                    <Link to={'/'} className='logo' onClick={()=>{window.scroll(0,0)}}>
                        <i className='bx bx-movie-play bx-tada main-color'>Cinema<img src={logo}/><span className='main-color'>BOX</span></i>
                    </Link>
                        <ul className={`nav-menu ${showLinks? 'active' : ''}`} >
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/movies'}>Movie</Link></li>
                            <li><Link to={'/series'}>Tv Serias</Link></li>
                            <li>
                                <a href='#' className='btn small'>
                                    <span>Sing in</span>
                                </a>
                            </li>
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
