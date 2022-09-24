import React from "react";
import Posts from "./Blog/Posts";

const LandingPage = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row ">
        <h5 className="text-muted">AKTUELLE VERANSTALTUNGEN</h5>
        <h3>Interkultureller Austausch für Menschen im besten Alter </h3>
        <Posts />
      </div>

      <hr className="mt-5 mb-5" />

      <div className="row ">
        <div className="col-lg-8">
          <h5 className="text-muted">WER SIND WIR</h5>
          <h3>
            Verein für menschliche und soziale Dienste, der Hilfe leistet.
          </h3>
          <p>
            Verbesserung der Stabilität, Gesundheit und des Wohlbefindens derer,
            denen wir dienen, durch Interessenvertretung, Akkulturation,
            Gemeinschaftsentwicklung und kulturelle Bewahrung. Bereitstellung
            von Kulturerbe- und Wohltätigkeitsarbeit in der lokalen drusischen
            Gemeinde.
          </p>
          <p>
            <a className="btn btn-primary" href="#">
              View details
            </a>
          </p>
        </div>
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
            Helfen Sie unserer Organisation, indem Sie noch heute spenden! Alle
            Spenden fließen direkt in unsere Sache ein.
          </p>
          <p>
            <a className="btn btn-primary" href="#">
              Spenden
            </a>
          </p>
        </div>
      </div>

      <hr className="mt-5 mb-5" />

      {/* SCREENSHOTS */}
      <div className="row">
        <div className="col-md-12">
          <h5 className="text-muted">Gallery</h5>
          <h3 className="mb-3">Bilder aus den Veranstaltungen.</h3>
          <div
            id="carouselExampleIndicators"
            className="carousel slide carousel-dark"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                aria-label="Slide 1"
                className="active"
                aria-current="true"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="6"
                aria-label="Slide 7"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active ">
                <img
                  src={require("../static/imgs/groupBild.jpeg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="carousel-item">
                <img
                  src={require("../static/imgs/groupBild01.jpeg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="carousel-item">
                <img
                  src={require("../static/imgs/groupBild02.jpeg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="carousel-item">
                <img
                  src={require("../static/imgs/groupBild03.jpeg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="carousel-item">
                <img
                  src={require("../static/imgs/groupBild04.jpeg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="carousel-item">
                <img
                  src={require("../static/imgs/groupBild05.jpeg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="carousel-item">
                <img
                  src={require("../static/imgs/groupBild06.jpeg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
