/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom";

import SvgLogo from '../static/imgs/SvgLogo';
import SvgLogoText from '../static/imgs/SvgLogoText';

import SvgLogoAnimation from '../static/imgs/SvgLogoAnimation'
import BubbleContainer from './BubbleContainer'
const Header = () => {
    return (
        <header className="App-header">
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <span className="me-2">
                                <SvgLogo />
                            </span>
                            <SvgLogoText width="66" height="100%" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                <li className="nav-item">
                                    <Link className='nav-link active' to="/">Home</Link>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dokumentation
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><Link className='dropdown-item' to="/functionality">Funktonalität</Link></li>
                                        <li><Link className='dropdown-item' to="/data-security">Datensicherheit</Link></li>
                                        <li><Link className='dropdown-item' to="/technical-requirements">technische Voraussetzungen</Link></li>
                                        <li><Link className='dropdown-item' to="/tutorial">Tutorial</Link></li>
                                        <li><Link className='dropdown-item' to="/interfaces">Schnittstellen</Link></li>
                                        <li><Link className='dropdown-item' to="/faq">FAQ</Link></li>
                                    </ul>
                                </li> */}
                                <li className="nav-item">
                                    <Link className='nav-link ' to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link ' to="/impressum">Impressum</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <div className='row'>
                    <div className="col-md-12 landingPageHeader">
                        <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                            <SvgLogoAnimation width="100%" height="30%" className="w-6" />
                        </div>
                        <BubbleContainer />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header