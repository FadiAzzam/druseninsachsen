/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../static/imgs/Logo";

import BubbleContainer from "./BubbleContainer";
const Header = () => {
  const [bgColor, setBgColor] = useState("");
  window.onscroll = function () {
    if (window.pageYOffset > 400) {
      setBgColor("bg-primary");
    } else {
      setBgColor("");
    }
  };
  return (
    <header className="App-header background">
      <div className="container center-element">
        <nav
          className={`navbar navbar-expand-lg navbar-dark fixed-top ${bgColor}`}
        >
          <div className="container">
            <a className="navbar-brand" href="./">
              <Logo width="30px" height="10%" className="head-logo" />
              <span className="ms-2 text-uppercase">
                Drusen in Sachsen e. V.
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active text-uppercase" to="./">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="./">
                    Über uns
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="./about-druse">
                    Über Drusen
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="./">
                    Nachrichten
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="./">
                    Registrieren
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="./impressum">
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-12 ">
            <div className="d-flex justify-content-center align-items-center h-100 w-100 text-light">
              <div className="container">
                <h1 className="m-w30">
                  Seien Sie heute einer von unseren drusischen Gemeinschaft!
                </h1>
                <p className="lead text-muted">Drusen in Sachsen e. V.</p>
                <p>
                  <a href="#" className="btn btn-primary me-2">
                    Spenden
                  </a>
                  <a href="#" className="btn btn-secondary">
                    Registrieren
                  </a>
                </p>
              </div>
            </div>
            <BubbleContainer />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
