import React, { useEffect } from "react";
import Sultan from "../static/imgs/aboutDruse/sultan.jpeg";
import Asmahan from "../static/imgs/aboutDruse/asmahan.png";
import Kamal from "../static/imgs/aboutDruse/kamal.jpeg";
import Fared from "../static/imgs/aboutDruse/fareed.jpeg";
import Mofaq from "../static/imgs/aboutDruse/mofaq.png";

const AboutDurse = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])
  return (
    <div className="container my-5 py-5">
      <h3 className="mb-5">ÜBER DRÜSEN</h3>

      <div className="row ">
        <div className="col-lg-6">
          <h5>Geschichte</h5>
          <hr />
          <p>
            Die Entstehungsgeschichte beginnt im Jahre 1017 während der
            Herrschaft des 6 Fatimidenkalifen al-Hakim bi-amr Allah. Al Hakim
            bi-amr Allah hat Hamza bin Ali den Titel ,,Imam" verliehen. Hamza
            war der Finder des „dritten Wegs". Er verwies auf neue
            Interpretation von Koran, Bibel, Tora und der alten griechischen
            Philosophie. Nach dem Verschwinden des Kalifen Alhakim mussten die
            Drusen in Ägypten Repressionen und Verfolgungen erleiden, sodass sie
            sich in die syrischen und libanesischen Berge zurückzogen. Dort
            leben sie bis heute. Philosophen wie Apollo, Sokrates, Hermes haben
            einen großen Einfluss auf ihren Glauben.
            <br /> <br />
            Sapiente natus nihil labore laudantium, voluptatum culpa voluptates,
            a quam accusamus, commodi ducimus dolorum assumenda recusandae omnis
            id alias ab? Enim rerum labore quo commodi animi?
          </p>
        </div>
        <div className="col-lg-6">
          <h5>Lehren</h5>
          <hr />
          <ul>
            <li>Aufrichtigkeit und Ehrlichkeit beim Sprechen</li>
            <li>Solidarität untereinander.</li>
            <li>
              Abkehr von Glaubensrichtungen, welche in das Dunkle, die
              Verderbnis führen
            </li>
            <li>Lossagung von allen Teufeln und allen Mächten des Bösen</li>
            <li>Bekenntnis zur Einheit und Einzigartigkeit Gottes</li>
            <li>Zufriedensein mit Gottes Handeln</li>
            <li>Sich Gottes Handeln und Willens fügen</li>
          </ul>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-6">
          <h5>Traditionen</h5>
          <hr />

          <p>
            Die Umstände der Geburt eines Menschen, seine Eltern und der
            Geburtshintergrund sind vorbestimmt und von Gott oder einem höheren
            Wesen allein entschieden. Das heißt " Karma" Entsprechend sind
            Missionierung oder Konvertierung nicht- erlaubt. "Alda'wa" ist schon
            gesehlossen. Der Kernglaube der Drusen ist die Reinkarnation. Auf
            dem Weg zu diesem Ziel und durch viele Reinkarnationen kann der
            Mensch viele Rollen bekommen und verschiedene Situationen erleben.
            Die 111 heiligen Schriften der Drusen sind in sechs Bände
            eingeteilt.
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-6">
          <figure className="overflow-hidden">
            <img
              className="custom-card-img imgHoverZoomOut"
              src={Sultan}
              alt="brown couch"
            ></img>
            <figcaption>Sultan al-Atrasch سلطان باشا الأطرش</figcaption>
          </figure>
        </div>
        <div className="col-lg-6">
          <figure className="overflow-hidden">
            <img
              className="custom-card-img imgHoverZoomOut"
              src={Fared}
              alt="brown couch"
            ></img>
            <figcaption>Farid al-Atrasch فريد الأطرش</figcaption>
          </figure>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-6">
          <figure className="overflow-hidden">
            <img
              className="custom-card-img imgHoverZoomOut"
              src={Asmahan}
              alt="brown couch"
            ></img>
            <figcaption>
              Amal al-Atrasch (Asmahan) (أسمهان) آمال الأطرش
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-6">
          <figure className="overflow-hidden">
            <img
              className="custom-card-img imgHoverZoomOut"
              src={Kamal}
              alt="brown couch"
            ></img>
            <figcaption>Kamal Dschumblat كمال جنبلاط</figcaption>
          </figure>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-6">
          <figure className="overflow-hidden">
            <img
              className="custom-card-img imgHoverZoomOut"
              src={Mofaq}
              alt="brown couch"
            ></img>
            <figcaption>Muwaffak Tarif موفق طريف</figcaption>
          </figure>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <img
            className="w-100"
            alt="Architektur Bild"
            src={require("../static/imgs/Druzen_Bev_lkerungszahlen.png")}
          ></img>
          <small>
            Quelle:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Druze"
            >
              https://en.wikipedia.org/wiki/Druze
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default AboutDurse;
