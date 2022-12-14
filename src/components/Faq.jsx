/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Faq = () => {
  return (
    <div className="container my-5 py-5 min-vh-100">
      <div className=""> 
        <div className="h2 text-center fw-bold">AIMS</div> 
        <p className="text-primary text-center text-small">How can we help you?</p> 
        <div className="d-flex justify-content-center"> 
          <div className="input-group mb-3">
            <span className="input-group-text" id="suchen">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input type="text" className="form-control" placeholder="Suchen" aria-label="Suchen" aria-describedby="suchen"/>
          </div>
        </div> 
        <br/>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Allgemein
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">

                <div className="accordion" id="accordionIntern">

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="internOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsinternOne" aria-expanded="true" aria-controls="collapsinternOne">
                        Warum sollte man Forschungsdaten digitalisieren?
                      </button>
                    </h2>
                    <div id="collapsinternOne" className="accordion-collapse collapse" aria-labelledby="internOne" data-bs-parent="#accordionIntern">
                      <div className="accordion-body">
                        Durch das Scannen von Akten, Pl??nen und anderen Institute Unterlagen k??nnen Sie die Vorteile digitaler Daten f??r sich nutzen. Digitale Daten lassen sich einfach verschicken, transportieren und sichern. Au??erdem ben??tigen sie keine Lagerfl??che. Vor allem bei gro??en Dokumentenbest??nden kann sich das schnell bemerkbar machen. 
                        Sie k??nnen mehreren Mitarbeitern gleichzeitig und auch ortsunabh??ngig zur Verf??gung gestellt werden.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="internTwo">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsinternTwo" aria-expanded="true" aria-controls="collapsinternTwo">
                        Was passiert mit den Originalen?
                      </button>
                    </h2>
                    <div id="collapsinternTwo" className="accordion-collapse collapse" aria-labelledby="internTwo" data-bs-parent="#accordionIntern">
                      <div className="accordion-body">
                        Bis auf wenige Ausnahmen k??nnen Originale nach der Digitalisierung vernichtet werden. Nur Dokumente, die rechtlich als Schriftbeweis gelten, 
                        sollten im Original erhalten bleiben. Die meisten Aktenarchive k??nnen jedoch nach der Digitalisierung 
                        einer datenschutzrechtlich sicheren Aktenvernichtung zugef??hrt werden.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="internThree">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsinternThree" aria-expanded="true" aria-controls="collapsinternThree">
                        Was ist, wenn ich Dokumente doch noch in Papierform ben??tige?
                      </button>
                    </h2>
                    <div id="collapsinternThree" className="accordion-collapse collapse" aria-labelledby="internThree" data-bs-parent="#accordionIntern">
                      <div className="accordion-body">
                        Digital erfasste Dokumente lassen sich nat??rlich jederzeit ausdrucken und so in Papierform zur??ck ??berf??hren. Wenn Sie also z.B. Unterlagen f??r Konferenzen oder ??hnliche Anl??sse ben??tigen, ist das kein Problem. 
                        Meist liegen die digitalisierten Dokumente im Dateiformat PDF/A vor, welches von jedem Betriebssystem aus problemlos ausgedruckt werden kann.
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              Teschniche Fragen
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">

                <div className="accordion" id="teschnischIntern">

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="teschnischOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#teschnischInternOne" aria-expanded="true" aria-controls="teschnischInternOne">
                        Warum sollte man Forschungsdaten digitalisieren?
                      </button>
                    </h2>
                    <div id="teschnischInternOne" className="accordion-collapse collapse" aria-labelledby="teschnischOne" data-bs-parent="#teschnischIntern">
                      <div className="accordion-body">
                        Durch das Scannen von Akten, Pl??nen und anderen Institute Unterlagen k??nnen Sie die Vorteile digitaler Daten f??r sich nutzen. Digitale Daten lassen sich einfach verschicken, transportieren und sichern. Au??erdem ben??tigen sie keine Lagerfl??che. Vor allem bei gro??en Dokumentenbest??nden kann sich das schnell bemerkbar machen. 
                        Sie k??nnen mehreren Mitarbeitern gleichzeitig und auch ortsunabh??ngig zur Verf??gung gestellt werden.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="internTwo">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsinternTwo" aria-expanded="true" aria-controls="collapsinternTwo">
                        Was passiert mit den Originalen?
                      </button>
                    </h2>
                    <div id="collapsinternTwo" className="accordion-collapse collapse" aria-labelledby="internTwo" data-bs-parent="#teschnischIntern">
                      <div className="accordion-body">
                        Bis auf wenige Ausnahmen k??nnen Originale nach der Digitalisierung vernichtet werden. Nur Dokumente, die rechtlich als Schriftbeweis gelten, 
                        sollten im Original erhalten bleiben. Die meisten Aktenarchive k??nnen jedoch nach der Digitalisierung 
                        einer datenschutzrechtlich sicheren Aktenvernichtung zugef??hrt werden.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="internThree">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsinternThree" aria-expanded="true" aria-controls="collapsinternThree">
                        Was ist, wenn ich Dokumente doch noch in Papierform ben??tige?
                      </button>
                    </h2>
                    <div id="collapsinternThree" className="accordion-collapse collapse" aria-labelledby="internThree" data-bs-parent="#teschnischIntern">
                      <div className="accordion-body">
                        Digital erfasste Dokumente lassen sich nat??rlich jederzeit ausdrucken und so in Papierform zur??ck ??berf??hren. Wenn Sie also z.B. Unterlagen f??r Konferenzen oder ??hnliche Anl??sse ben??tigen, ist das kein Problem. 
                        Meist liegen die digitalisierten Dokumente im Dateiformat PDF/A vor, welches von jedem Betriebssystem aus problemlos ausgedruckt werden kann.
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq