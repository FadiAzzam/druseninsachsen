/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="py-5 bg-primary mt-5">
      <div className="container">
        <div className="row my-5">
          <div className="col-3 text-light">
            <h6 className="text-info text-uppercase">
              Drusen in Sachsen e. V.{" "}
            </h6>

            <small className="d-block mb-3 text-secondary">2022</small>
          </div>
          <div className="col-3">
            <h6 className="text-info text-uppercase">Über uns</h6>
            <ul className="list-unstyled text-small">
              <li>
                <Link
                  className="dropdown-item text-secondary secondaryHover text-uppercase"
                  to="/contact"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item text-secondary secondaryHover text-uppercase"
                  to="/contact"
                >
                  Über Drusen
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item text-secondary secondaryHover text-uppercase"
                  to="/contact"
                >
                  Nachrichten
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item text-secondary secondaryHover text-uppercase"
                  to="/contact"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="text-info text-uppercase">Veranstaltungen</h6>
            <ul className="list-unstyled text-small ">
              <li>
                <Link
                  className="dropdown-item text-secondary secondaryHover"
                  to="/functionality"
                >
                  11.09.2022 Albrechtsburg Meissen
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item text-secondary secondaryHover"
                  to="/functionality"
                >
                  17.09.2022 Dresden japanisches palais
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item text-secondary secondaryHover"
                  to="/functionality"
                >
                  22.10.2022 Spaziergang
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item text-secondary secondaryHover"
                  to="/functionality"
                >
                  11.12.2022 Robot Programming for Everyone
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="text-info text-uppercase">Information</h6>
            <ul className="list-unstyled text-small ">
              <li className="dropdown-item text-secondary non-hover">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <a
                  className="text-light"
                  href="mailto:drusen-in-sachsen@outlook.de"
                >
                  Drusen-in-sachsen@outlook.de
                </a>
              </li>
              <li className="dropdown-item text-secondary non-hover">
                VR11705 - Amtsgericht Dresden <br /> Eintragung am 29 Oktober
                2020
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
