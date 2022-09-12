import React from 'react'

const DataSecurity = () => {
  return (
    <div className="container my-5 py-5 min-vh-100">
      <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3 className="">DATENSICHERHEIT</h3>
              <p className="lh-lg text-align-justify">
                LMS4.0 ist eine serverbasierte Anwendung zum Erstellen und Verwalten von Online-Experimenten und -Datenbanken. Daher müssen im Netzwerk und auf den Servern, auf denen AIMS gehostet wird, sowie in der AIMS-Software selbst geeignete Sicherheitspraktiken eingerichtet werden.
                Diese Sicherheitsstufe dient zum Schutz der in AIMS gespeicherten Daten sowie der Informationen zur Identität und Aktivität der AIMS-Endbenutzer.
              </p>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
          <img width="100%" height="" alt='Architektur Bild' src={require('../../static/imgs/Documentation/datensicherheit.gif')}></img>
          </div>
      </div>

      <hr className="mt-5 mb-5" />
      
      <div className="row">
          <div className="col-md-12 d-flex flex-column justify-content-center">
          <h3 className="">AIMS PROTOKOLLIERUNG UND AUDIT TRAIL</h3>
              <p className="lh-lg text-align-justify">AIMS verwaltet einen integrierten Audit-Trail, der alle Benutzeraktivitäten und alle von jedem Benutzer betrachteten Sites einschließlich Kontextinformationen (z. B. das Projekt oder den Datensatz, auf den zugegriffen wird) protokolliert. Unabhängig davon, ob die Aktivität Daten eingibt, Daten exportiert, ein Feld ändert, einen Bericht ausführt oder einen Benutzer hinzufügt / ändert, AIMS protokolliert alle Aktionen.</p>
              <p className="lh-lg text-align-justify">
                Die Protokollaufzeichnung kann selbst von Benutzern, denen die Berechtigung zum Anzeigen der Protokollierungsseite erteilt wurde, 
                innerhalb eines Projekts angezeigt werden. Auf der Seite Protokollierung können diese Benutzer den gesamten Audit-Trail für 
                dieses Projekt anzeigen oder exportieren und den Audit-Trail auf verschiedene Arten filtern, je nach Art der Aktivität und / oder des Benutzers. 
                Mit dem in AIMS integrierten Audit-Trail können Administratoren alle Aktivitäten und Daten ermitteln, 
                die von einem bestimmten Benutzer angezeigt oder geändert wurden.
              </p>
          </div>
      </div>
    </div>
  )
}

export default DataSecurity