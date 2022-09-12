/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import { Link } from "react-router-dom";


import SvgLogo from '../static/imgs/SvgLogo';
import SvgLogoText from '../static/imgs/SvgLogoText';

import BubbleContainer from './BubbleContainer'
const Header = () => {
    const [bgColor, setBgColor] = useState("")
    window.onscroll = function() {

        if (window.pageYOffset > 400) {
            setBgColor("bg-primary")
        } else {
            setBgColor("")
        }
    }
    return (
        <header className="App-header background">
            <div className='container center-element'>
                <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${bgColor}`}>
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            Drusen in Sachsen e. V.
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
                                    <Link className='nav-link ' to="/contact">Über uns</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link ' to="/contact">Über Drusen</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link ' to="/contact">Nachrichten</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link ' to="/contact">Registrieren</Link>
                                </li>
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
                    <div className="col-md-12 ">
                        <div className='d-flex justify-content-center align-items-center h-100 w-100 text-light'>
                            <div className="container">
                                <h1 className="m-w30">Seien Sie heute einer von unseren drusischen Gemeinschaft!</h1>
                                <p className="lead text-muted">Drusen in Sachsen e. V.</p>
                                <p>
                                    <a href="#" className="btn btn-primary me-2">Spenden</a>
                                    <a href="#" className="btn btn-secondary">Registrieren</a>
                                </p>
                            </div>
                        </div>
                        <BubbleContainer />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header