import React from 'react'

const TechnicalRequirements = () => {
  return (
    <div className="container my-5 py-5 min-vh-100">
      <div className="row">
          <div className="col-md-12 d-flex flex-column justify-content-center">
          <h3 className="">TECHNISCHE VORAUSSETZUNGEN</h3>
              <p className="lh-lg text-align-justify">
                AIMS ist eine Serversoftware, die ein Benutzer möglicherweise nicht auf seinem Computer installiert.
                <br/> 
                AIMS muss von Ihrem institutionellen IT-Personal auf einem lokalen Webserver installiert werden. Anschließend können Benutzer im Webbrowser ihres Geräts über das Web auf AIMS zugreifen.
              </p>
          </div>
      </div>

      <hr className="mt-5 mb-5" />

      <div className="row">
          <div className="col-md-12 d-flex flex-column justify-content-center">
          <h3 className="">Cloud-basiertes Hosting vs On-Premise-Hosting für AIMS</h3>
              <p className="lh-lg text-align-justify">
              AIMS kann auf der Server- / Netzwerkinfrastruktur Ihrer lokalen Institution (dh. vor Ort) oder auf einem Cloud-basierten Dienst bereitgestellt werden, 
              für den Sie möglicherweise die Verwendung von AIMS in Betracht ziehen, um schnell eine produktionsbereite AIMS-Umgebung bereitzustellen.
              </p>
          </div>
          <div className="col-md-12 d-flex flex-column justify-content-center">
          <img width="100%" height="" alt='Architektur Bild' src={require('../../static/imgs/Documentation/CloudVSonPremise.gif')}></img>
          </div>
      </div>

      <hr className="mt-5 mb-5" />

      <div className="row">
          <div className="col-md-12 d-flex flex-column justify-content-center">
          <h3 className="">Anforderungen und Abhängigkeiten für AIMS installieren:</h3>
              <p className="lh-lg text-align-justify">
                AIMS kann leicht für die Verwendung durch Konsortialpartnerinstitutionen konfiguriert werden und erfordert nur minimale Infrastruktur und Einrichtung.<br/>
                AIMS kann auf verschiedenen Windows-Betriebssystemen ausgeführt werden. Im Folgenden sind die AIMS-Anforderungen für Hardware und Software von Drittanbietern aufgeführt.
              </p>
          </div>
          <div className="col-md-12 d-flex flex-column justify-content-center">
            <ol className="list-group list-group-numbered">
              <li className="list-group-item"><strong>Windows server</strong> 2008R2 oder neuer</li>
              <li className="list-group-item"><strong>.NET framework</strong>, minimum <strong>4.7.1</strong></li>
              <li className="list-group-item">Web server mit str <strong>IIS</strong></li>
              <li className="list-group-item"><strong>PostgreSQL</strong> Datenbankserver, Für die Installation / Aktualisierung ist <strong>Version 11 a </strong> erforderlich</li>
              <li className="list-group-item">
                <strong>File Server</strong> (optional). Ein separater Server kann verwendet werden, um Dateien unterzubringen, die über eine sichere Kommunikation mit dem SSL-Protokoll (SSL unterstützt) in AIMS hochgeladen / gespeichert wurden. Wenden Sie sich zuerst an Ihre lokalen Richtlinien, falls Ihre Institution Vorschriften oder Mandate zur Aufbewahrung von Dateien hat.
                Minimum 200 GB. Mehr Speicher hängt von RAW-Daten ab.
              </li>
              <li className="list-group-item"><strong>RAM & Core</strong> Bis zu 30 Benutzer: RAM 8GB CPU 2 Cores Bis zu 200 Benutzers: RAM 16GB CPU 4 Cores</li>
            </ol>          
          </div>
      </div>

      <hr className="mt-5 mb-5" />


      <div className="row">
          <div className="col-md-12 d-flex flex-column justify-content-center">
          <h3 className="">HINWEIS</h3>
              <p className="lh-lg text-align-justify"> 
                Obwohl alle oben genannten Komponenten auf demselben Computer / Server eingerichtet werden können, empfehlen wir aus Sicherheits- und Leistungsgründen, 
                dass der Webserver, der Datenbankserver und der Dateiserver getrennt sind und auf unterschiedlicher Hardware (oder virtualisierten Servern) ausgeführt werden.
                <br/>
                Obwohl die Entwickler des AIMS-Konsortiums häufig Unterstützung für die Installation von AIMS leisten können, kann für die Installation der oben aufgeführten 
                erforderlichen Software keine IT-Unterstützung bereitgestellt werden.
                <br/>
                Es wird empfohlen, dass Sie sich an Ihre lokale IT-Abteilung wenden oder sich an eine Vielzahl detaillierter Dokumentationen im Internet wenden.
                AIMS stellt keine strengen Anforderungen an die Verarbeitungsgeschwindigkeit des Servers, den Arbeitsspeicher oder den Festplattenspeicher, 
                da es in vielerlei Hinsicht sehr leicht ist und nur sehr wenig anfänglichen Speicherplatz benötigt (weniger als 100 GB für den Webserver und den Datenbankserver zusammen). 
                Wir empfehlen in der Regel, 100 GB für den Speicherplatz des Webservers und zunächst auch 100 GB für PostgreSQL zuzuweisen, da dies für etwa ein Jahr intensiver PostgreSQL-Nutzung mehr 
                als ausreichend sein sollte.
              </p>
          </div>
      </div>

    </div>
  )
}

export default TechnicalRequirements