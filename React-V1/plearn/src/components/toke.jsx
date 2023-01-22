import React from "react";
import styled from "styled-components";

export default function toke() {
  return (
    <Container>
      <div className="wills">
        <div className="muis">
          <h1>JOIN THE MOST POWERFUL TOKEN IN THIS UNIVERSE</h1>
          <div className="cont">
            <button class="button">
              <span class="button_lg">
                <span class="button_sl"></span>
                <span class="button_text">Play Now</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-image: url(https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/nft-home-img-11.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 185px 0 140px;
  .wills {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 1400px;
    max-width: 1400px;
    margin: 0 auto;
    .muis {
      padding: 0% 18%;
      align-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;

      h1 {
        color: #ffffff;
        font-family: Rubik, sans-serif;
        font-size: 55px;
        line-height: 60px;
        letter-spacing: 3px;
        font-weight: 700;
        text-transform: uppercase;
      }
      .cont {
        padding: 55px 0 0;
        .button {
          width: 171.6;
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          border: none;
          background: none;
          color: #0f1923;
          cursor: pointer;
          position: relative;
          padding: 8px;
          margin-bottom: 20px;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 14px;
          transition: all 0.15s ease;
        }

        .button::before,
        .button::after {
          content: "";
          display: block;
          position: absolute;
          right: 0;
          left: 0;
          height: calc(50% - 5px);
          border: 1px solid #7d8082;
          transition: all 0.15s ease;
        }

        .button::before {
          top: 0;
          border-bottom-width: 0;
        }

        .button::after {
          bottom: 0;
          border-top-width: 0;
        }

        .button:active,
        .button:focus {
          outline: none;
        }

        .button:active::before,
        .button:active::after {
          right: 3px;
          left: 3px;
        }

        .button:active::before {
          top: 3px;
        }

        .button:active::after {
          bottom: 3px;
        }

        .button_lg {
          position: relative;
          display: block;
          padding: 10px 20px;
          color: #fff;
          background-color: #0f1923;
          overflow: hidden;
          box-shadow: inset 0px 0px 0px 1px transparent;
        }

        .button_lg::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 2px;
          background-color: #0f1923;
        }

        .button_lg::after {
          content: "";
          display: block;
          position: absolute;
          right: 0;
          bottom: 0;
          width: 4px;
          height: 4px;
          background-color: #0f1923;
          transition: all 0.2s ease;
        }

        .button_sl {
          display: block;
          position: absolute;
          top: 0;
          bottom: -1px;
          left: -8px;
          width: 0;
          background-color: #ff4655;
          transform: skew(-15deg);
          transition: all 0.2s ease;
        }

        .button_text {
          position: relative;
        }

        .button:hover {
          color: #0f1923;
        }

        .button:hover .button_sl {
          width: calc(100% + 15px);
        }

        .button:hover .button_lg::after {
          background-color: #fff;
        }
      }
    }
  }
`;
