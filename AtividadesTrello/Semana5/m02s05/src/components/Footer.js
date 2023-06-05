import React from "react";

import Lista from "./Lista";

import "../styles/Footer.css";

function Footer() {
  let hw = "HelloWorld";
  return (
    <>
      <footer className="Footer">
        <div className="info">
          <h4>CONTATO</h4>
          <p>Rua Ali Perto, Belo Horizonte</p>
          <p>MG - Brasil</p>
          <a href="mailto:contato@bikcraft.com">contato@contato.com</a>
          <br />
          <a href="tel:+55 31 888844444">(31) 8 8884-4444</a>
        </div>

        <div className="info">
          <h4>INFORMAÇÕES</h4>
          <nav>
            <ul className="info-ul">
            <li className="li-menuBar"><Lista item="Home"/></li>
            <li className="li-menuBar"><Lista item="Main"/></li>
            <li className="li-menuBar"><Lista item="Contato"/></li>
            <li className="li-menuBar"><Lista item="Termos e Condições"/></li>
            </ul>
          </nav>
        </div>
      
      </footer>
      <div>
        <p>{hw} &copy; Alguns direitos reservados.</p>
      </div>
    </>
  );
}

export default Footer;
