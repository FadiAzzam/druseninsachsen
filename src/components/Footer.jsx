/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom";

import AppLogo from "../static/imgs/appLogo.svg"

const Footer = () => {
    return (
        <footer className="py-5 bg-primary mt-5">
            <div className='container'>
                <div className="row my-5">
                    <div className="col-3">
                        <img src={AppLogo} width="12%" alt='AppLogo'></img>
                        <small className="d-block mb-3 text-secondary">© 2022</small>
                    </div>
                    {/* <div className="col-6 col-md">
                        <h5 className='text-info'>Dokumentation</h5>
                        <ul className="list-unstyled text-small ">
                            <li><Link className='dropdown-item text-secondary secondaryHover' to="/functionality">Funktonalität</Link></li>
                            <li><Link className='dropdown-item text-secondary secondaryHover' to="/data-security">Datensicherheit</Link></li>
                            <li><Link className='dropdown-item text-secondary secondaryHover' to="/technical-requirements">technische Voraussetzungen</Link></li>
                            <li><Link className='dropdown-item text-secondary secondaryHover' to="/tutorial">Tutorial</Link></li>
                            <li><Link className='dropdown-item text-secondary secondaryHover' to="/interfaces">Schnittstellen</Link></li>
                        </ul>
                    </div> */}
                    <div className="col-12 col-md">
                        <h5 className='text-info'>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link className='dropdown-item text-secondary secondaryHover' to="/contact">Contact</Link></li>
                            <li><Link className='dropdown-item text-secondary secondaryHover' to="/faq">FAQ</Link></li>
                            <li><Link className='dropdown-item text-secondary secondaryHover' to="/impressum">Impressum</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer