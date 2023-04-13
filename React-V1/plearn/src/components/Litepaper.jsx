import React, { useState } from "react";
import styled from "styled-components";
import bg from "../assets/logo-ionic.svg";
import { logoIonic } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
export default React.memo(function Litepaper() {
  const IonicLogo = () => {
    return (
      <IonIcon
        icon={logoIonic}
        style={{ fill: "rgba(10, 180, 180, 1)" }}
        className="icon"
      ></IonIcon>
    );
  };
  const [mail, handlemail] = useState("");

  const [check, setcheck] = useState("");
  const handlecheck = () => {};
  return (
    <Container>
      <section className="section-item animated-box">
        <div className="container">
          <div className="section__content">
            <div
              className="promo-banner-fw"
              style={{
                backgroundImage: `url(${bg})`,
              }}
            >
              <div className="block-title-inline">
                <img
                  src="https://nftly-theme.pxsquad.com/demo1/wp-content/themes/nftly/assets/images/newsletter-i.png"
                  alt="Newsletter icon"
                  className="image"
                />
                <h4 className="heading-3">MY NEWSLETTER </h4>
              </div>
              <h2 className="promo-banner-fw__heading">
                Subscribe! to our newsletter so you can always be up to date
                with PLEARN{" "}
              </h2>

              <div className="tnp-subscription-nft animated-box">
                <form method="post" className="sub-nft">
                  <input type="hidden" name="nlang" value="" />
                  <div className="tnp-field tnp-field-email">
                    <input
                      className="tnp-email"
                      type="email"
                      name="ne"
                      value={mail}
                      onChange={handlemail}
                      placeholder="Enter your email"
                      required=""
                    />
                  </div>

                  <div className="tnp-field tnp-field-button">
                    <input
                      className="tnp-button"
                      type="submit"
                      value="Sign up now"
                    />
                  </div>
                </form>{" "}
                <div className="w-form">
                  <div name="email-form" className="form">
                    <label className="w-checkbox checkbox-field">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox">
                        <span
                          className={
                            `material-symbols-outlined ` +
                            (check === false ? "" : "d-none")
                          }
                        >
                          done
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        name="Checkbox-2"
                        className="w-chck"
                        onClick={handlecheck}
                      />
                      <span
                        className="checkbox-label w-form-label"
                        for="Checkbox-2"
                      >
                        By entering your email, you agree to our{" "}
                        <a
                          href="/"
                          className="link form__newsletter-link--green"
                        >
                          Terms &amp; Conditions
                        </a>{" "}
                        {`& `}
                        <a
                          href="#"
                          className="link-2 form__newsletter-link--green"
                        >
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      */ /*{" "}
      <div class="signupSection">
        <div class="info">
          <h2>Join The Conversation</h2>
          <IonicLogo />
          <p>The Future Is Here</p>
        </div>
        <form class="signupForm">
          <h2>
            {" "}
            Let us know your thoughts and help us shape the game's future!
          </h2>
          <ul class="noBullet">
            <li>
              <label for="username"></label>
              <input
                type="text"
                class="inputFields"
                id="username"
                name="username"
                placeholder="Username"
                value=""
                required
              />
            </li>
            <li>
              <label for="email"></label>
              <input
                type="email"
                class="inputFields"
                id="email"
                name="email"
                placeholder="Email"
                value=""
                required
              />
            </li>
            <li id="center-btn">
              <input
                type="submit"
                id="join-btn"
                name="join"
                alt="Join"
                value="Join"
              />
            </li>
            <li></li>
          </ul>
        </form>
      </div>
    </Container>
  );
});
const Container = styled.div`
  .card {
    position: relative;
    left: 2em;
    width: 12.5em;
    height: 6.5em;
    background: white;
    transition: 0.4s ease-in-out;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
  }

  .heading {
    position: relative;
    color: black;
    font-weight: bold;
    font-size: 1.1em;
    padding-top: 1em;
    padding-left: 1em;
    transition: 0.4s ease-in-out;
  }

  .details {
    position: relative;
    color: black;
    font-size: 0.6em;
    padding-top: 1.5em;
    padding-left: 2em;
    transition: 0.4s ease-in-out;
  }

  .price {
    position: relative;
    color: black;
    font-weight: bold;
    font-size: 0.8em;
    padding-top: 1.5em;
    padding-left: 1.5em;
    top: 9.6em;
    left: 5em;
    transition: 0.4s ease-in-out;
  }

  .btn1 {
    position: relative;
    border: none;
    outline: none;
    background-color: black;
    color: white;
    font-size: 0.6em;
    padding-left: 6.9em;
    padding-right: 6.9em;
    padding-top: 0.8em;
    padding-bottom: 0.85em;
    border-radius: 10px;
    left: 2.6em;
    top: 14.8em;
    transition: 0.4s ease-in-out;
    font-weight: bold;
  }

  .btn1:hover {
    background-color: rgb(43, 168, 43);
  }

  .btn2 {
    position: relative;
    border: none;
    outline: none;
    background-color: black;
    color: white;
    font-size: 0.6em;
    padding-left: 5.1em;
    padding-right: 5.1em;
    padding-top: 0.8em;
    padding-bottom: 0.85em;
    border-radius: 10px;
    left: 2.6em;
    top: 15.5em;
    transition: 0.4s ease-in-out;
    font-weight: bold;
  }

  .btn2:hover {
    background-color: rgb(43, 168, 43);
  }

  .glasses {
    position: relative;
    top: 0em;
    left: -0.8em;
    width: 70px;
    height: 70px;
    transition: 0.4s ease-in-out;
  }

  .card:hover {
    width: 12.5em;
    height: 21.7em;
    left: 3.3em;
  }

  .card:hover + .glasses {
    transform: rotateX(360deg);
    height: 100px;
    width: 100px;
    left: -6.2em;
    top: -6.5em;
  }

  .card:hover .heading {
    transform: translateY(7em) translateX(2.3em);
  }

  .card:hover .details {
    transform: translateY(13em) translateX(3.5em);
  }
`;
