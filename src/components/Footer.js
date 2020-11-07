function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy;&nbsp;Маршак, 2020.</p>
      <p className="footer__copyright">
        Сделано студентами{" "}
        <a
          href="https://praktikum.yandex.ru"
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