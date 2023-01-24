import React, { useState, useEffect } from "react";
import logo_plearn from "../assets/Images/Logo_Plearn.png";
import { ethers } from "ethers";
import axios from "axios";

export default function Nav({ onUserAccountChange }) {
  const [userAccount, setUserAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  // const [welcomeMessage, setWelcomeMessage] = useState("");

  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  const connectWalletHandler = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result);
          console.log(result); // Array which contains the accounts.
          // setConnButtonText("Wallet Connected");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      alert("Please install MetaMask extension.");
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setUserAccount(newAccount[0]);
    onUserAccountChange(newAccount[0]); // Callback function - Passing the value to the parent component which is App.js
    // setWelcomeMessage("Welcome, ");
  };

  useEffect(() => {
    if (userAccount != null) {
      axios.post("https://plearn-backend.onrender.com/", { userAccount }).then((res) => {
        setConnButtonText("Wallet Connected");
        alert(res.data.message);
      });
    }
    else
    {
      setConnButtonText("Connect Wallet");
    }
  }, [userAccount]);

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // listen for account changes
  window.ethereum.on("accountsChanged", accountChangedHandler);
  window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-black navbar-dark shadow-5-strong ">
        <div className="container-fluid">
          <div className="logo-thumbnail navbar-brand logo-custom-css">
            {" "}
            <img src={logo_plearn} alt="Bootstrap" />
          </div>
          <button
            type="button"
            className="navbar-toggler wltBtn"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          > 
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
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
              <li className="nav-item "></li>
            </ul>
            <a
              className="nav-link btn  px-3 py-2  wltBtn"
              onClick={connectWalletHandler}
            >
              {connButtonText}
            </a>
            {/* <span>
              {welcomeMessage}
              {userAccount}
            </span> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
