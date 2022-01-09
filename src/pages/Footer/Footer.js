import React from 'react';

import './Footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/img/bg2.jpg';
import logo from '../../assets/img/video.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer-wrapper">
                <div className="footer-logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">CinemaBOX</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>                      
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Git Hub</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
