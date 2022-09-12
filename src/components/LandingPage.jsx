/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'

//import Pics

const LandingPage = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row ">
                <div className="col-lg-4 text-center">
                    <span>
                        <FontAwesomeIcon icon={faDatabase} size="4x"/>
                    </span>
                    <h3>Heading</h3>
                    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                    <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
                <div className="col-lg-4 text-center">
                    <span>
                        <FontAwesomeIcon icon={faDatabase} size="4x"/>
                    </span>
                    <h3>Heading</h3>
                    <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                    <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
                <div className="col-lg-4 text-center">
                    <span>
                        <FontAwesomeIcon icon={faDatabase} size="4x"/>
                    </span>
                    <h3>Heading</h3>
                    <p>And lastly this, the third column of representative placeholder content.</p>
                    <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
            </div>

            <hr className="mt-5 mb-5" />

            {/* Video */}
            <div className="row ">
                <div className='col-lg-12'>

                    <div className='embed-responsive embed-responsive-16by9"'>
                        <video width="100%" height="100%" controls >
                            {/* <source src={AimsVideo} type="video/mp4" /> */}
                        </video>
                    </div>
                    <p className='lh-lg text-align-justify'>
                        AIMS ist ein Datenmanagementsystem (DMS),
                        welches verschiedene Technologien vereint um eine möglichst nutzerfreundliche und hochvariable Erfassung, Speicherung, Pflege, Verarbeitung, Analyse und Visualisierung von Daten zu gewährleisten.
                        Hauptinstrument ist dabei das SQL Datenbankmanagementsystem PostgreSQL, welches für die Verwaltung der eigentlichen Daten in Datentabellen der Datenbank zuständig ist.
                        Unter anderem besitzt AIMS eine vollständige Nutzer- und Rechteverwaltung, eine ausbaubare REST-Schnittstelle zur Anbindung und Integration von externen Komponenten und/oder Drittsoftware,
                        sowie ein komplettes Dateimanagement, welches entweder über einen eigenen File-Server oder eine eigen konfigurierte und angebundene Instanz einer Cloud Speicher (wie OwnCloud) gehandlet wird.AIMS ist ein Datenmanagementsystem (DMS),
                        welches verschiedene Technologien vereint um eine möglichst nutzerfreundliche und hochvariable Erfassung, Speicherung, Pflege, Verarbeitung, Analyse und Visualisierung von Daten zu gewährleisten.</p>

                </div>
            </div>

            <hr className="mt-5 mb-5" />

            {/* Beispiel Architektur Multidatenbank*/}
            <div className="row">
                <div className="col-md-7 d-flex flex-column justify-content-center">
                    <h3 className="">Beispiel Architektur. <span className="text-muted">Multidatenbank.</span></h3>
                    <p className="lh-lg text-align-justify">
                        für Multidatenbank Model – Austausch von einzelne Daten für zentrale Daten Hub. Wenn Sie Tabellenkalkulationen oder Microsoft Access für die Datenerfassung verwenden,
                        können Sie mit geringem Aufwand auf LMS 4.0 konvertieren und die vielen in LMS 4.0 verfügbaren Funktionen nutzen, die in Microsoft Excel und Access nicht verfügbar sind:
                        Multiexperten, Multicenter, Tracking, Protokollierung, Audit.
                        Wenn Sie Tabellenkalkulationen oder Microsoft Access für die Datenerfassung verwenden, können Sie mit geringem Aufwand auf LMS 4.0 konvertieren und die vielen in LMS 4.0
                        verfügbaren Funktionen nutzen, die in Microsoft Excel und Access nicht verfügbar sind: Multiexperten, Multicenter, Tracking, Protokollierung, Audit.
                    </p>
                </div>
                <div className="col-md-5 d-flex flex-column justify-content-center">
                    <img width="100%" height="" alt='Architektur Bild' src={require('../static/imgs/ArchitekturBildMultidatenbank.png')}></img>
                </div>
            </div>

            <hr className="mt-5 mb-5" />

            {/* Beispiel Architektur */}
            <div className="row">
                <div className="col-md-5">
                    <img width="100%" height="100%" alt='Architektur Bild' src={require('../static/imgs/ArchitekturBild.png')}></img>
                </div>
                <div className="col-md-7 d-flex flex-column justify-content-center">
                    <h3 className="">Beispiel Architektur <span className="text-muted">Rollen Management</span></h3>
                    <p className="lh-lg text-align-justify">für Forschungsinstitute mit Rollen Management zwischen Arbeitsgruppen oder Abteilungen.</p>
                </div>
            </div>

            <hr className="mt-5 mb-5" />

            {/* Datenspeicherung */}
            <div className="row">
                <div className="col-md-7 d-flex flex-column justify-content-center">
                    <h3 className="">Datenspeicherung <span className="text-muted">organisieren und aufbereiten.</span></h3>
                    <p className="lh-lg text-align-justify">
                        <strong>Speicherung</strong> und <strong>Verwaltung</strong> von Industrie- und Forschungsdaten sind essentiell für die Digitalisierung in der
                        Industrie – und transnationale Forschung sowie für die digitale Strategie und Planung.
                    </p>
                </div>
                <div className="col-md-5">
                    <img width="100%" height="100%" alt='Architektur Bild' src={require('../static/imgs/aimsGIF.gif')}></img>
                </div>
            </div>

            <hr className="mt-5 mb-5" />

            {/* Rest API */}
            <div className="row">
                <div className="col-md-12">
                    <h3 className='text-center'>Maschinen- und Prozess-Dashboard-Oberfläche</h3>
                    <img width="100%" height="100%" alt='Architektur Bild' src={require('../static/imgs/restAPI.gif')}></img>

                </div>
            </div>

            <hr className="mt-5 mb-5" />

            {/* SCREENSHOTS */}
            <div className='row'>
                <div className="col-md-12">
                    <div className="card m-2 p-2">
                        <div className="card-body text-center">
                            <h3 className="card-title">Screenshots</h3>
                            <p className="fw-light">
                            </p><p><strong>Lorem, ipsum dolor.</strong></p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, natus.
                            <p></p>
                            <div>
                                <div id="carouselExampleIndicators" className="carousel slide carousel-dark" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-label="Slide 1" className="active" aria-current="true"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>

                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active ">
                                            <img width='100%' height='100%' className='' alt='Architektur Bild' src={require('../static/imgs/screenshots/dashboard.png')}></img>
                                            <div className="carousel-caption d-none d-md-block bg-shadow">
                                                <h5>Dashboard für Nano – Analysis</h5>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img width='100%' height='100%' className='' alt='Architektur Bild' src={require('../static/imgs/screenshots/dashboardCTanlage.png')}></img>
                                            <div className="carousel-caption d-none d-md-block bg-shadow">
                                                <h5>Dashboard für CT Anlage mit 3D Bild Viewer (Dicom Format).</h5>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img width='100%' height='100%' className='' alt='Architektur Bild' src={require('../static/imgs/screenshots/dashboardWidgets.png')}></img>
                                            <div className="carousel-caption d-none d-md-block bg-shadow">
                                                <h5>Dashboard mit verschiedene Widgets</h5>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img width='100%' height='100%' className='' alt='Architektur Bild' src={require('../static/imgs/screenshots/mikroskopischeBilder.png')}></img>
                                            <div className="carousel-caption d-none d-md-block bg-shadow">
                                                <h5>Mikroskopische Bilde für Proben Charakterisierung.</h5>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img width='100%' height='100%' className='' alt='Architektur Bild' src={require('../static/imgs/screenshots/sensorDaten.png')}></img>
                                            <div className="carousel-caption d-none d-md-block bg-shadow">
                                                <h5>Sensordaten Erfassung.</h5>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img width='100%' height='100%' className='' alt='Architektur Bild' src={require('../static/imgs/screenshots/sensorDatenErfassung.png')}></img>
                                            <div className="carousel-caption d-none d-md-block bg-shadow">
                                                <h5>Sensor Daten Erfassung.</h5>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img width='100%' height='100%' className='' alt='Architektur Bild' src={require('../static/imgs/screenshots/werkstoffDashboard.png')}></img>
                                            <div className="carousel-caption d-none d-md-block bg-shadow">
                                                <h5>Werkstoff Charakterisierung Dashboard</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <hr className="mt-5 mb-5" />

            {/* PATIENTEN STUDIEN */}

            <div className="row">
                <div className="col-md-12">
                    <h3 className='text-center mb-5'>Patienten Studien</h3>

                    <div className="row">
                        <div className="col-md-6">
                            <img className="w-100" alt='Architektur Bild' src={require('../static/imgs/screenshots/patientenStudien/Bild1-patientenStudien.png')}></img>
                        </div>
                        <div className="col-md-6">
                            <img className="w-100" alt='Architektur Bild' src={require('../static/imgs/screenshots/patientenStudien/Bild2-patientenStudien.png')}></img>
                        </div>
                    </div>
                    <div className='row gap-1'>
                        <div className="col-md-12">
                            <img className="w-100" alt='Architektur Bild' src={require('../static/imgs/screenshots/patientenStudien/Bild3-patientenStudien.png')}></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage