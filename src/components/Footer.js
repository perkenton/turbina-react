import React from "react";
import { FOOTER_LINK } from "../constants/constants"

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy;&nbsp;Маршак, 2020.</p>
      <p className="footer__text">
        Сделано студентами{" "}
        <a
          href={ FOOTER_LINK.link }
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          Яндекс.Практикум
        </a>
      </p>
    </footer>
  );
}

export default Footer;