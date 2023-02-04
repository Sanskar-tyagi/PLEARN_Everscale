import "./App.css";
import GameSection from "./components/GameSection";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ShowCase from "./components/ShowCase";
import { useEffect, useState } from "react";
import BreadCrums from "./components/Video";
import CTAsection from "./components/CTAsection";
import Hype from "./components/Hype";
import Gamedes from "./components/Gamedes";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Toke from "./components/toke";
import styled from "styled-components";

function App() {
  const [userAccount, setUserAccount] = useState(null);

  const handleUserAccountChange = (newUserAccount) => {
    setUserAccount(newUserAccount);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader>
          <div className="loader">
            <div id="first">
              <div id="second">
                <div id="third"></div>
              </div>
            </div>
          </div>
          <div className="loading"></div>
          <div className="boxLoader">
            <div class="spinner">
              <span>L</span>
              <span>O</span>
              <span>A</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
            </div>
          </div>
        </Loader>
      ) : (
        <div>
          <Nav onUserAccountChange={handleUserAccountChange} />
          <Header userAccount={userAccount} />
          <GameSection />
          {/* <Gamedes /> */}
          <div className="vidbg">
            <BreadCrums />
            <ShowCase />
            {/* <Toke /> */}
            <Faq />
            <CTAsection />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

const Loader = styled.div`
  .loader {
    background-color: black;

    position: absolute;
    top: 50vh;
    left: 48vw;

    width: 2.5em;
    height: 2.5em;
    transform-origin: center;
    transition: 1s;
    border-radius: 50px;
    box-shadow: inset 0px 0px 10px purple,
      inset 5px 5px 12px rgba(44, 0, 114, 0.8),
      inset 8px 8px 1px rgba(160, 120, 255, 0.7),
      0px 0px 1px rgba(160, 120, 255, 0.6);
    animation: 1.2s linear infinite 0s running first682;
  }

  .loader div {
    width: inherit;
    height: inherit;
    position: absolute;
  }

  #first {
    transform: rotate(90deg);
  }

  #first::before {
    --width: 1em;
    --height: 1em;
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - var(--width) / 2);
    width: 1em;
    height: 1em;
    background-color: rgb(44, 0, 114);
    box-shadow: inset 5px 5px 10px rgb(160, 120, 255), 0px 0px 2px white;
    border-radius: 50px;
    animation: 0.8s ease-in 0s infinite running jump2;
  }

  #second {
    transform: rotate(90deg);
  }

  #second::before {
    --width: 1em;
    --height: 1em;
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - var(--width) / 2);
    width: 1em;
    height: 1em;
    background-color: rgb(44, 0, 114);
    box-shadow: inset 5px 5px 10px rgb(160, 120, 255), 0px 0px 2px white;
    border-radius: 50px;
    animation: 1.5s ease-in 0s infinite running jump2;
  }

  #third {
    transform: rotate(90deg);
  }

  #third::before {
    --width: 1em;
    --height: 1em;
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - var(--width) / 2);
    width: 1em;
    height: 1em;
    background-color: rgb(44, 0, 114);
    box-shadow: inset 5px 5px 10px rgb(160, 120, 255), 0px 0px 2px white;
    border-radius: 50px;
    animation: 1.6s ease-in 0s infinite running jump2;
  }

  .loader::after {
    --width: 1em;
    --height: 1em;
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - var(--width) / 2);
    width: 1em;
    height: 1em;
    background-color: rgb(44, 0, 114);
    box-shadow: inset 5px 5px 10px rgb(160, 120, 255), 0px 0px 2px white;
    border-radius: 50px;
    animation: 1.2s ease-in 1s alternate infinite running jump2;
  }

  @keyframes first682 {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(0deg);
      transform: rotate(90deg);
    }

    50% {
      transform: rotate(90deg);
      transform: rotate(180deg);
    }

    75% {
      transform: rotate(180deg);
      transform: rotate(270deg);
    }

    100% {
      transform: rotate(270deg);
      transform: rotate(360deg);
    }
  }

  @keyframes jump2 {
    0% {
      top: 100%;
    }

    25% {
      top: 230%;
    }

    50% {
      top: 100%;
    }

    75% {
      height: 0.6em;
    }

    100% {
      height: 1em;
    }
  }
  .loading {
    --height-of-loader: 4px;
    --loader-color: #0071e2;
    width: 100%;
    height: var(--height-of-loader);
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .loading::before {
    content: "";
    position: absolute;
    background: var(--loader-color);
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 30px;
    animation: moving 1s ease-in-out infinite;
  }

  @keyframes moving {
    50% {
      width: 100%;
    }

    100% {
      width: 0;
      right: 0;
      left: unset;
    }
  }
  .spinner {
    height: 50px;
    width: max-content;
    font-size: 18px;
    font-weight: 600;
    font-family: monospace;
    letter-spacing: 1em;
    color: #f5f5f5;
    filter: drop-shadow(0 0 10px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner span {
    animation: loading6454 1.75s ease infinite;
  }

  .spinner span:nth-child(2) {
    animation-delay: 0.25s;
  }

  .spinner span:nth-child(3) {
    animation-delay: 0.5s;
  }

  .spinner span:nth-child(4) {
    animation-delay: 0.75s;
  }

  .spinner span:nth-child(5) {
    animation-delay: 1s;
  }

  .spinner span:nth-child(6) {
    animation-delay: 1.25s;
  }

  .spinner span:nth-child(7) {
    animation-delay: 1.5s;
  }

  @keyframes loading6454 {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }
  }
  .boxLoader {
    position: absolute;
    top: 58vh;
    left: 44vw;
  }
`;
