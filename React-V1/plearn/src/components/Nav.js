import React from "react";
import logo_plearn from "../assets/Images/Logo_Plearn.png";
export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong ">
        <div className="container-fluid">
          <div className="logo-thumbnail navbar-brand logo-custom-css">
            {" "}
            <img src={logo_plearn} alt="Bootstrap" />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="index.htmlnavbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="index.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="index.html">
                  Tokenomics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="index.html">
                  {" "}
                  Real Estate
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="index.html">
                  Trading
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="index.html">
                  {" "}
                  NFT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
