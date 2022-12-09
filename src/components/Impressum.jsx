import React, { useEffect } from "react";

export default function Impressum() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])

  return (
    <div className="container py-4 min-vh-100 mt-5">
      <div className="card">
        <div className="card-header">Impressum</div>
        <div className="card-body">
          <div>
            <strong>Drusen in Sachsen &nbsp;e. V.</strong>
          </div>
          {/* <p>test. 12 12345 Dresden</p>
          <div>
            <strong>Telefon</strong>
          </div>
          <p>+49 (0)815/1234567</p> */}

          <div>
            <strong>E-Mail</strong>
          </div>
          <p>Drusen-in-sachsen@outlook.de</p>

          <hr />
          {/* <div>
            <strong>Gemeinschaftlich vertretungsberechtigt</strong>
          </div>
          <ol>
            <li>
              <div>
                <strong>Vorsitzender:</strong>
              </div>
              <p>Felix mustermann</p>
              <p>
                c/o test. 12, <br /> 12345 Dresden
              </p>
              <div>
                <strong>Telefon</strong>
              </div>
              <p>+49 (0)815/1234567</p>
              <div>
                <strong>E-Mail</strong>
              </div>
              <p>Drusen-in-sachsen@outlook.de</p>
            </li>
            <li>
              <div>
                <strong>Vorsitzender:</strong>
              </div>
              <p>Felix Fußballmann</p>
              <p>
                c/o test. 12 <br /> 12345 Dresden
              </p>

              <div>
                <strong>Telefon</strong>
              </div>
              <p>+49 (0)815/1234567</p>
              <div>
                <strong>E-Mail</strong>
              </div>
              <p>Drusen-in-sachsen@outlook.de</p>
            </li>
          </ol> */}

          <div>
            <p>
              Das Impressum gilt für:{" "}
              <a href="https://drusen-in-sachsen.de/">
                https://drusen-in-sachsen.de/
              </a>
            </p>
          </div>
          {/* 
          <div>
            <strong>Registergericht</strong>
          </div>
          <p>..</p>

          <div>
            <strong>Registernummer</strong>
          </div>
          <p>..</p>

          <div>
            <strong>Umsatzsteuer-Identifikationsnummer</strong>
          </div>
          <p>..</p> */}

          {/* <div>
            <strong>Verantwortliche V.i.S.d § 18 Abs. 2 MStV</strong>
          </div>
          <p>Andreas Mustermann, Musterstr. 1, 12345 Musterstadt</p> */}
          <hr />
          <ol>
            <li>
              <div>
                <strong>Haftungsbeschränkung</strong>
              </div>
              <p>
                Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt
                erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die
                Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten
                Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene
                Gefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben
                die Meinung des jeweiligen Autors und nicht immer die Meinung
                des Anbieters wieder. Mit der reinen Nutzung der Website des
                Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer
                und dem Anbieter zustande.
              </p>
            </li>
            <li>
              <div>
                <strong>Externe Links</strong>
              </div>
              <p>
                Diese Website enthält Verknüpfungen zu Websites Dritter
                ("externe Links"). Diese Websites unterliegen der Haftung der
                jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen
                Verknüpfung der externen Links die fremden Inhalte daraufhin
                überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt
                waren keine Rechtsverstöße ersichtlich. Der Anbieter hat
                keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung
                und auf die Inhalte der verknüpften Seiten. Das Setzen von
                externen Links bedeutet nicht, dass sich der Anbieter die hinter
                dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine
                ständige Kontrolle der externen Links ist für den Anbieter ohne
                konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei
                Kenntnis von Rechtsverstößen werden jedoch derartige externe
                Links unverzüglich gelöscht.
              </p>
            </li>
            <li>
              <div>
                <strong>Urheber- und Leistungsschutzrechte</strong>
              </div>
              <p>
                Die auf dieser Website veröffentlichten Inhalte unterliegen dem
                deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen
                Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung
                bedarf der vorherigen schriftlichen Zustimmung des Anbieters
                oder jeweiligen Rechteinhabers. Dies gilt insbesondere für
                Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung,
                Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder
                anderen elektronischen Medien und Systemen. Inhalte und Rechte
                Dritter sind dabei als solche gekennzeichnet. Die unerlaubte
                Vervielfältigung oder Weitergabe einzelner Inhalte oder
                kompletter Seiten ist nicht gestattet und strafbar. Lediglich
                die Herstellung von Kopien und Downloads für den persönlichen,
                privaten und nicht kommerziellen Gebrauch ist erlaubt. Die
                Darstellung dieser Website in fremden Frames ist nur mit
                schriftlicher Erlaubnis zulässig.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
