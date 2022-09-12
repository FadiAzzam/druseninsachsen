import React from 'react'

const Functionality = () => {
    return (
        <div className="container my-5 py-5 min-vh-100">
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                <h3 className="">FUNKTONALITÄT</h3>
                    <p className="lh-lg text-align-justify">
                        AIMS kann sich an ihr Unternehmen, Institute anpassen! In die folgenden Beispiele sehen Sie, wie sich die Benutzeroberfläche von AIMS an die Unternehmensdesign angepasst hat.
                    </p>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                <img width="100%" height="" alt='Architektur Bild' src={require('../../static/imgs/Documentation/functionality.gif')}></img>
                </div>
            </div>

            <hr className="mt-5 mb-5" />

            <div className="row">
                <div className="col-md-12 d-flex flex-column justify-content-center">
                    <h3 className="">Intuitive Benutzeroberfläche</h3>
                    <p className="lh-lg text-align-justify">
                    Intuitive Benutzeroberfläche für die Formularerstellung und Dateneingabe. Erweiterte Funktionen wie Datenbereichsprüfung, Verzweigungslogik und berechnete Felder- Online- oder Offline-Projektierung.                    </p>
                </div>
                <div className="col-md-4 d-flex flex-column justify-content-center">
                    <img width="100%" height="" alt='Architektur Bild' src={require('../../static/imgs/Documentation/uniKlinik.png')}></img>
                </div>
                <div className="col-md-4 d-flex flex-column justify-content-center">
                    <img width="100%" height="" alt='Architektur Bild' src={require('../../static/imgs/Documentation/uni.png')}></img>
                </div>
                <div className="col-md-4 d-flex flex-column justify-content-center">
                    <img width="100%" height="" alt='Architektur Bild' src={require('../../static/imgs/Documentation/chimical.png')}></img>
                </div>
            </div>

            <hr className="mt-5 mb-5" />

            <div className="row">
                <div className="col-md-12 d-flex flex-column justify-content-center">
                <h3 className="">ONLINE ODER OFFLINE PROJEKT</h3>
                    <p className="lh-lg text-align-justify">
                        Design mit dem <strong>Online-Designer</strong> oder <strong>offline</strong> mit einer Vorlage für das “data dictionary” in Microsoft Excel, die später in AIMS hochgeladen werden kann.                    
                    </p>
                </div>
            </div>

            <hr className="mt-5 mb-5" />

            <div className="row">
                <div className="col-md-12 d-flex flex-column justify-content-center">
                <h3 className="">ZUGRIFF VON MEHRERE STANDORTE</h3>
                    <p className="lh-lg text-align-justify">AIMS-Datenbanken können von Forschern verschiedener <strong>Standorte</strong> und <strong>Institutionen</strong> verwendet werden.</p>
                </div>
            </div>

            <hr className="mt-5 mb-5" />

            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                <h3 className="">AUDIT TRAILS</h3>
                    <p className="lh-lg text-align-justify">
                        Zum Verfolgen der Datenmanipulation und Benutzeraktivität.
                    </p>
                </div>
                <div className="col-md-12 d-flex flex-column justify-content-center">
                    <img width="100%" height="" alt='Architektur Bild' src={require('../../static/imgs/Documentation/AuditTrails.png')}></img>
                </div>
            </div>

            <hr className="mt-5 mb-5" />

            <div className="row">
                <div className="col-md-12 d-flex flex-column justify-content-center">
                <h3 className="">BENUTZERVERWALTUNG</h3>
                    <p className="lh-lg text-align-justify">Jeder Benutzer kann zu eine oder mehrere Sub-Datenbanken freigeschaltet werden.  Die Rechte der Benutzer können frei gestaltet werden. Für eine einfache Handhabung werden 3 Benutzerrollen voreingestellt. Diese Rollen sind mit entsprechenden Rechten voreingestellt. Ein Benutzer kann für mehrere Datenbanken mit unterschiedlichen Rollen freigeschaltet werden.</p>
                </div>
            </div>

            <hr className="mt-5 mb-5" />

            <div className="row">
                <div className="col-md-12 d-flex flex-column justify-content-center">
                <h3 className="">DATA MANAGEMENT</h3>
                    <p className="lh-lg text-align-justify">Machen Sie Ihre Daten FAIR. Speichern Sie alle Daten, die mit Ihren Experimenten in beliebiger Größe und in beliebigem Format verbunden sind, über die Weboberfläche oder mithilfe von Skripten zum Hochladen im Hintergrund, je nach Datengröße.</p>
                </div>
            </div>

            <hr className="mt-5 mb-5" />

            <div className="row">
                <div className="col-md-12 d-flex flex-column justify-content-center">
                <h3 className="">IMPORT/EXPORT</h3>
                    <p className="lh-lg text-align-justify">Excel-kompatible Import- und Exportformate für alle Tabellen. Export von Lab Notebook in Text- und Word-Dateien.</p>
                </div>
            </div>

            <hr className="mt-5 mb-5" />

            <div className="row">
                <div className="col-md-12 d-flex flex-column justify-content-center">
                <h3 className="">ZUGRIFF UND RICHTIGE MANAGEMENT</h3>
                    <p className="lh-lg text-align-justify">Volle Kontrolle über Benutzerprofil und Zugriffsrechte.</p>
                </div>
            </div>
        </div>
    )
}

export default Functionality