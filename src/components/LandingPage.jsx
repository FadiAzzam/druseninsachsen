import React, { useEffect, useState } from "react";
import Posts from "./Blog/Posts";
import { Link } from "react-router-dom";
//import BubbleContainer from "./BubbleContainer";
import MessageModal from "./tools/MessageModal";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const [isModal, setModal] = useState(true);

  return (
    <>
      {isModal && <MessageModal setModal={setModal} />}
      <header className="App-header background">
        <div className="container center-element">
          <div className="row">
            <div className="col-md-12 ">
              <div className="d-flex justify-content-center align-items-center h-100 w-100 text-light">
                <div className="container">
                  <h1 className="m-w30">
                    Seien Sie heute einer von unseren drusischen Gemeinschaft!
                  </h1>
                  <p className="lead text-muted">Drusen in Sachsen e. V.</p>
                  <p>
                    <a
                      href="#"
                      className="btn btn-primary me-2 "
                      onClick={() =>
                        alert(
                          "Spenden Funktion befindet sich aktuell in Bearbeitung!"
                        )
                      }
                    >
                      Spenden
                    </a>
                    <Link className="btn btn-secondary" to="./registering">
                      Registrieren
                    </Link>
                  </p>
                </div>
              </div>
              {/* <BubbleContainer /> */}
            </div>
          </div>
        </div>
      </header>

      <div className="container my-5 py-5">
        <div className="row ">
          <div className="col-lg-8">
            <h5 className="text-muted">WER SIND WIR</h5>
            <h3>
              Verein für menschliche und soziale Dienste, der Hilfe leistet.
            </h3>
            <p>
              Verbesserung der Stabilität, Gesundheit und des Wohlbefindens
              derer, denen wir dienen, durch Interessenvertretung,
              Akkulturation, Gemeinschaftsentwicklung und kulturelle Bewahrung.
              Bereitstellung von Kulturerbe- und Wohltätigkeitsarbeit in der
              lokalen drusischen Gemeinde.
            </p>
            <p>
              <Link className="btn btn-primary" to="./about">
                Weiterlesen
              </Link>
            </p>
          </div>
        </div>

        <hr className="mt-5 mb-5" />

        <div className="row ">
          <h5 className="text-muted">AKTUELLE VERANSTALTUNGEN</h5>
          <h3>Interkultureller Austausch für Menschen im besten Alter </h3>
          <Posts />
        </div>

        <hr className="mt-5 mb-5" />

        {/* pdf */}
        <div className="row ">
          <div className="col-lg-12">
            <div className="embed-responsive">
              <object
                title="pdf"
                data={require("../static/pdfs/DIS e. V. Mitglied-Versamm-Deutsch.pdf")}
                type="application/pdf"
                width="100%"
                height="800px"
              ></object>
            </div>
          </div>
        </div>

        <hr className="mt-5 mb-5" />

        <div className="row ">
          <div className="col-lg-12 img-background">
            <h5 className="text-muted">Spenden</h5>
            <h1>Unterstützen Sie uns.</h1>
            <p>
              Helfen Sie unserer Organisation, indem Sie noch heute spenden!
              Alle Spenden fließen direkt in unsere Sache ein.
            </p>
            <p>
              <a
                className="btn btn-primary"
                href="#"
                onClick={() =>
                  alert(
                    "Spenden Funktion befindet sich aktuell in Bearbeitung!"
                  )
                }
              >
                Spenden
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
