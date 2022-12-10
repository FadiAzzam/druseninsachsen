import React, { useRef } from "react";
import Logo from "../static/imgs/Logo";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const printDocument = () => {
  const input = document.getElementById("divToPrint");
  html2canvas(input).then((canvas) => {
    let imgWidth = 208;
    //let imgHeight = (canvas.height * imgWidth) / canvas.width;
    const imgData = canvas.toDataURL("img/png");
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "JPEG", 20, 20, 170, 260);
    pdf.save("download.pdf");
  });
};

const Bundeslaender = [
  "Baden Württemberg",
  "Bayern",
  "Berlin",
  "Brandenburg",
  "Bremen",
  "Hamburg",
  "Hessen",
  "Mecklenburg-Vorpommern",
  "Niedersachsen",
  "Nordrhein Westfalen",
  "Rheinland-Pfalz",
  "Saarland",
  "Sachsen",
  "Sachsen-Anhalt",
  "Schleswig-Holstein",
  "Thüringen",
];

const Familienstand = [
  "ledig",
  "verheiratet",
  "verwitwet",
  "geschieden",
  "eingetragene Lebenspartnerschaft",
  "eingetragene Lebenspartnerin/eingetragener Lebenspartner verstorben",
  "eingetragene Lebenspartnerschaft aufgehoben",
];
const Registering = () => {
  const canvasRef = useRef();

  return (
    <>
      <div className="bg-dark">
        <div className="container py-5">
          <div className="row align-items-center py-5">
            <div className="col-lg-12">
              <h5 className="display-4 text-light text-center">
                Jetzt registrieren
              </h5>
              <p className="lead text-muted mb-0 text-light text-center">
                Helfen Sie uns und werden Sie Teil unserer Familie!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container py-5">
          <div className="RegisteringForm p-5" id="divToPrint">
            <div className="row g-3">
              <div className="col-sm-12">
                <Logo width="100%" height="100px" className="head-logo" />
              </div>
            </div>

            <div className="row g-3">
              <div className="col-sm-6">
                <h5 className="text-center">DRUSEN IN SACHSEN E. V.</h5>
                <p className="text-center">Anmeldeformular</p>
              </div>
              <div className="col-sm-6">
                <h5 className="text-center">الجالية الدرزية - ساكسن</h5>
                <p className="text-center">طلب انتساب</p>
              </div>
              <hr />
            </div>
            <div className="formBody">
              <div>
                <h5>Art der Mitgliedschaft - نوع العضوية *</h5>
                <ul className="list-group">
                  <li className="list-unstyled">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="BeitragendesCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="BeitragendesCheckbox"
                      >
                        <strong>Beitragendes Mitglied - عضو مساهم</strong>
                        <br />
                        Beitragendes Mitglied: Monatliche Beitrag 5 Euro, der
                        automatisch vom Konto des Mitglieds abgebucht wird.
                        <br />
                        العضو المساهم : الاشتراك الشهري 5 يورو تخصم بشكل تلقائي
                        من حساب المنتسب
                        <br />
                        <br />
                      </label>
                    </div>
                  </li>
                  <li className="list-unstyled">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="FreundCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="FreundCheckbox"
                      >
                        <strong>Freundmitglied - عضو صديق</strong>
                        <br />
                        Freundmitglied: Er hat keine Mitgliedsgebühren oder
                        monatlichen Abonnements.
                        <br />
                        .العضو الصديق : لايوجد لديه رسوم انتساب او اشتراكات
                        شهرية
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <br />
              <form className="needs-validation" noValidate="">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="Vorname" className="form-label">
                      Vorname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Vorname"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Ein gültiger Vorname ist erforderlich.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="Nachname" className="form-label">
                      Nachname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Nachname"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Ein gültiger Nachname ist erforderlich.
                    </div>
                  </div>

                  <div className="col-4">
                    <label htmlFor="date" className="form-label">
                      Geburtsdatum
                    </label>
                    <div className="input-group has-validation">
                      <input
                        type="date"
                        max="2004-01-01"
                        className="form-control"
                        id="date"
                        placeholder="date"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Ihr Geburtsdatum ist erforderlich.
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <label htmlFor="sex" className="form-label">
                      Geschlecht
                    </label>
                    <select className="form-select" id="sex" required="">
                      <option value="">auswählen...</option>
                      <option>weiblich</option>
                      <option>männlich</option>
                      <option>keine Angabe</option>
                    </select>
                    <div className="invalid-feedback">
                      Geschlecht ist erforderlich.
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <label htmlFor="status" className="form-label">
                      Familienstand
                    </label>

                    <select className="form-select" id="status" required="">
                      <option value="">auswählen...</option>
                      {Familienstand.map((stand) => {
                        return <option key={stand}>{stand}</option>;
                      })}
                    </select>
                    <div className="invalid-feedback">
                      Familienstand ist erforderlich.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Adresse
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Adresse ist erforderlich.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="address2" className="form-label">
                      Adresse 2 <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="city" className="form-label">
                      Stadt
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      city ist erforderlich..
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="zip" className="form-label">
                      PLZ Postleitzahl
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      PLZ Postleitzahl ist erforderlich..
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="state" className="form-label">
                      Bundesland
                    </label>
                    <select
                      name=""
                      className="form-select"
                      id="state"
                      required=""
                    >
                      <option value="">Choose...</option>
                      {Bundeslaender.map((bl) => {
                        return <option key={bl}>{bl}</option>;
                      })}

                      <option></option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="country" className="form-label">
                      Land
                    </label>
                    <select className="form-select" id="country" required="">
                      <option value="">auswählen...</option>
                      <option>Deutschland</option>
                    </select>
                    <div className="invalid-feedback">
                      Bitte wählen Sie ein gültiges Land aus.
                    </div>
                  </div>

                  <div className="col-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address htmlFor shipping
                      updates.
                    </div>
                  </div>

                  <div className="col-6">
                    <label htmlFor="number" className="form-label">
                      Mobilnummer
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      id="number"
                      placeholder=""
                    />
                    <div className="invalid-feedback">
                      Please enter a valid number htmlFor shipping updates.
                    </div>
                  </div>

                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="save-info"
                    />
                    <label className="form-check-label" htmlFor="save-info">
                      Ich bin mit der Geschäftsordnung einverstanden. أوافق على
                      النظام الداخلي
                    </label>
                  </div>

                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary disabled">
                      Registrieren
                    </button>
                    <button
                      className="btn text-info"
                      onClick={() => printDocument()}
                    >
                      Formular herunterladen
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registering;
