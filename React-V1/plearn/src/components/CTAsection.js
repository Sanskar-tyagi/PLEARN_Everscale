import React, { useState } from "react";
import Styled from "styled-components";

export default function CTAsection() {
  const [mail, setmail] = useState("");
  const handlemail = (e) => {
    setmail(e.target.value);
  };
  const [check, setcheck] = useState(false);
  const handlecheck = () => {
    setcheck(!check);
  };
  return (
    <Container>
      <section className="section-item animated-box">
        <div className="container">
          <div className="section__content">
            <div className="promo-banner-fw">
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
      </section>
    </Container>
  );
}
const Container = Styled.div`.section-item {
  
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-top:65px;
    margin-top: 0px;
    .container {
        width: 1200px;
        .section__content{
            .promo-banner-fw{
            
                    height: 345px;
                    padding-left: 62px;
                    border-radius: 16px;
                    background-color: #f0f2f6;
                    background-size: 100%;
                    color: var(--color-grey);
                    background-repeat: no-repeat;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    -webkit-box-pack: center;
                    -webkit-justify-content: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    background-size: cover;
                    background-image: url(https://nftly-theme.pxsquad.com/demo1/wp-content/uploads/2022/06/Newsletter-5.jpg);
           
                .block-title-inline {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -webkit-align-items: center;
                    -ms-flex-align: center;
                    align-items: center;
                    color: #1F2128;
                    .image {
                        width: 20px;
                        height: 16px;
                        margin-right: 13px;max-width: 100%;
                        vertical-align: middle;
                        display: inline-block;  
                          border: 0;
                    }.heading-3 {
                        color: #1F2128;
                        letter-spacing: 5.5px;font-size: 18px;
                        line-height: 24px;
                        margin-top: 10px;
                    }
                }
                .promo-banner-fw__heading {
                    max-width: 670px;
                    margin-top: 0px;
                    margin-bottom: 24px;
                    font-size: 36px;
                    line-height: 47px;   
                    color: #1F2128;
                    font-weight: 600;
                }
                .tnp-subscription-nft {  
                      transform: translateY(0px);
                    opacity: 1;
                    max-width: 400px;
                    .sub-nft {
                        display: flex;margin-top: 0em;
                        input {
                            line-height: normal;    color: inherit;
                            font: inherit;
                            margin: 0;
                        }input[type="hidden" i] {
                            appearance: none;
                            background-color: initial;
                            cursor: default;
                            display: none !important;
                            padding: initial;
                            border: initial;
                        }
                        .tnp-field-email {
                            height: 46px;
                            width: 100%;
                            border-radius: 8px 0 0 8px;
                            background-color: rgba(31, 33, 40, 0.11);
                            input[type=email] {
                                width: 100%;
                                height: 100%;
                                border: 1px none #000;
                                border-radius: 0px;
                                background-color: transparent;
                                color: var(--color-grey);
                                font-size: 14px;
                                font-weight: 700;
                                outline: none;
                                padding: 8px 12px;
                                display: block;
                                line-height: 1.428571429;
                                margin-bottom: 10px; 
                                margin: 0;
                            }
                        }
                       .tnp-field-button {
                            background-color: var(--color-grey);
                            color: #f0f2f6;
                            border: 0;
                            padding: 6px 18px;
                            border-radius: 8px;
                            cursor: pointer;
                            display: flex;
                            flex: 0 0 auto;
                            position: relative;
                            left: -10px;
                            input[type="submit"] {
                                position: inherit;
                                border: 0;
                                text-transform: uppercase;
                                font-size: 14px;
                                font-weight: 700;color: inherit; 
                                margin: 0;
                        
                                text-decoration: none;
                                vertical-align: middle;    cursor: pointer;
                                background: transparent;    transition: all 200ms ease-in-out;
                            }
                        }
                    }.w-form {
                        margin: 0 0 15px;
                        display: block;
                        max-width: 400px;
                        width: 100%;
                        height: auto;
                        -webkit-box-pack: start;
                        -webkit-justify-content: flex-start;
                        -ms-flex-pack: start;
                        justify-content: flex-start;
                        -webkit-box-align: start;
                        -webkit-align-items: flex-start;
                        -ms-flex-align: start;
                        align-items: flex-start;
                        border-radius: 8px;
                        background-color: transparent;
                        .checkbox-field {
                            margin-top: 10px;    display: block;
                            margin-bottom: 5px;
                            padding-left: 20px;    font-weight: bold;
                        }
                    }
                    .w-checkbox::before {
                        content: " ";
                        display: table;
                        -ms-grid-column-span: 1;
                        grid-column-end: 2;
                        -ms-grid-column: 1;
                        grid-column-start: 1;
                        -ms-grid-row-span: 1;
                        grid-row-end: 2;
                        -ms-grid-row: 1;
                        grid-row-start: 1;
                    }.checkbox {
                        width: 13px;
                        float: left;
                        margin-bottom: 0px;
                        margin-left: -20px;
                        margin-right: 0px;
                        margin-top: 4px;
                        line-height: normal;
                        height: 13px;
                        border-style: none;
                        border-radius: 4px;
                        background-color:  #808191;;
                        color:  #808191;;border-top-width: 1px;
                        border-bottom-width: 1px;
                        border-left-width: 1px;
                        border-right-width: 1px;
                        border-top-color: #ccc;
                        border-bottom-color: #ccc;
                        border-left-color: #ccc;
                        border-right-color: #ccc;
                    }
                     
                    .w-chck {
                        line-height: normal;    box-sizing: border-box;
                        padding: 0;    opacity: 0;
                        position: absolute;
                        z-index: -1;
                    }
                   
                    .checkbox-label {
                        font-size: 14px;display: inline-block;
                        cursor: pointer;
                        font-weight: normal;
                        margin-bottom: 0px;
                        a{
                            color: var(--color-grey);
    text-decoration: underline;
} 
                    }
                }
                .w-checkbox::after {
                    content: " ";
                    display: table;
                    -ms-grid-column-span: 1;
                    grid-column-end: 2;
                    -ms-grid-column: 1;
                    grid-column-start: 1;
                    -ms-grid-row-span: 1;
                    grid-row-end: 2;
                    -ms-grid-row: 1;
                    grid-row-start: 1;
                    clear: both;
                }
            }
        }
  }

}

@media only screen and (max-width: 991px) {
    .promo-banner-fw {
      height: auto !important;
      width: 100%!important;;
      background-image: unset!important;;
      padding: 40px!important;;
      background-size: cover!important;;
    }
  }
  @media only screen and (max-width: 480px) {
    .promo-banner-fw {
      padding: 40px 20px!important;;
    }
  }
  @media only screen and (max-width: 480px) {
    .promo-banner-fw .block-title-inline {
      justify-content: center!important;;
      align-content: center!important;;
      margin: 0!important;;
    }
  }
  @media only screen and (max-width: 480px) {
    .promo-banner-fw .block-title-inline h4 {
      letter-spacing: 2.5px!important;;
    }
  }
  @media only screen and (max-width: 480px) {
    .promo-banner-fw .form__newsletter-button--grey,
  .promo-banner-fw .btn.btn--black.btn--xl {
      width: 100%!important;;
      max-width: unset!important;;
      height: 46px!important;;
      padding: 0!important;;
      display: flex!important;;
      align-items: center!important;;
      justify-content: center!important;;
    }
  }
  .form{
    display: block;
    max-width: 400px;
    width: 100%;
    height: auto;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    border-radius: 8px;
    background-color: transparent;
  }
  .material-symbols-outlined{
    color:white;
    width: 0px;
    float: left;
    margin-bottom: 0px;
    margin-left: -1px;
    margin-right: 0px;
    margin-top: -3px;
    line-height: normal;
    height: 8px;
    border-style: none;    font-size: 15px;

    border-radius: 4px;
  }
`;
