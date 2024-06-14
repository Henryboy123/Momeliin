import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="bd-footer mt-5 bg-body-tertiary">
      <div className="container py-md-3 px-4 px-md-3 text-body-secondary">
        <div className="row">
          <div className="col-lg-3 mb-3 d-flex flex-column gap-5">
            <img src="MomelinLogo.png" alt="Momelin Logo" style={{width: '150px'}} />
            <ul className="list-unstyled small">
              <li className="mb-2">
                Designed and built with all the love in the world by the Momeliin team with
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Terms & Policies</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="">Policies</a>
              </li>
              <li className="mb-2">
                <a href="">Terms of Use</a>
              </li>
              <li className="mb-2">
                <a href="">Code of Conduct</a>
              </li>
              <li className="mb-2">
                <a href="">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p className="">© 2024 momeliin.com - Candles Shop</p>
          <div className="row">
            <div className="media-buttons d-flex justify-content-end gap-2">
              <a
                className="instagram-link"
                href="https://www.instagram.com/momeliin/"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
