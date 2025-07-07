import React from "react";
import "./Policy.css";

const Policy = () => {
  return (
    <div className="policy-container">
      <h1 className="policy-title"> Clearevise's Personvernpolicy</h1>
      <p className="policy-text">
        Välkommen till Clearevise. Din integritet är viktig för oss, och denna
        personvernpolicy förklarar hur vi samlar in, använder och skyddar dina
        personuppgifter.
      </p>

      <div className="policy-section">
        <h2>1. Insamling av information</h2>
        <p className="policy-text">
          Vi samlar in information som du tillhandahåller direkt till oss, såsom
          namn, e-postadress och annan relevant data vid registrering eller
          användning av våra tjänster.
        </p>
      </div>

      <div className="policy-section">
        <h2>2. Användning av information</h2>
        <p className="policy-text">
          Informationen används för att förbättra vår tjänst, tillhandahålla
          kundsupport, samt kommunicera viktiga uppdateringar och erbjudanden.
        </p>
      </div>

      <div className="policy-section">
        <h2>3. Delning av information</h2>
        <p className="policy-text">
          Vi delar inte din information med tredje part utan ditt samtycke, förutom
          där det krävs enligt lag.
        </p>
      </div>

      <div className="policy-section">
        <h2>4. Dina rättigheter</h2>
        <p className="policy-text">
          Du har rätt att begära tillgång till, rättelse eller radering av dina
          personuppgifter. Kontakta oss vid frågor.
        </p>
      </div>

      <div className="policy-section policy-contact">
        <h2>5. Kontakt</h2>
        <p className="policy-text">
          Om du har frågor om vår personvernpolicy, vänligen kontakta oss på
          <a href="mailto:support@clearevise.com"> support@clearevise.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Policy;
