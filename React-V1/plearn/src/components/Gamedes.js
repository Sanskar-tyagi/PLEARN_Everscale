import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "../utils/slider";

export default function Gamedes() {
  const [index, setIndex] = useState(0);
  // "Virtual board game that teaches financial literacy",
  //   "Customizable game settings and different rules to keep gameplay fresh and challenging",
  //   "Variety of NFTs to purchase and collect",
  //   "Customizable dice and game boards for a personalized gaming experience",
  //   "In-game knowledge templates to learn while playing",
  //   "Opportunities to earn through buying NFTs, properties, and virtual land",

  //through investing, buying and selling real estate, and owning and upgrading NFTs
  const text1_options = [
    "This brightly colored dice is a perfect choice, with its vibrant design and smooth edges,",
    "This stylish hat, crafted with a unique modern look.",
    "A new classic sports car with sleek lines and powerful engine",
    "This virtual villa has stunning graphics and intricate details, ",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text1_options.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div className="ms">
        <Carousel />
        <div
          class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b9f81c8"
          data-id="b9f81c8"
          data-element_type="column"
        >
          <div class="elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-4ef84bb elementor-widget elementor-widget-artorias_core_section_title"
              data-id="4ef84bb"
              data-element_type="widget"
              data-widget_type="artorias_core_section_title.default"
            >
              <div class="elementor-widget-container">
                <div class="qodef-shortcode qodef-m qodef-section-title qodef-alignment--right qodef--has-appear qodef--appeared">
                  <span class="qodef-m-tagline">
                    <span class="qodef-m-tagline-inner">PLEARN </span>
                  </span>
                  <h2 class="qodef-m-title">
                    <span class="qodef-m-title-inner">
                      {text1_options[index]}
                    </span>
                  </h2>
                  <p class="qodef-m-text-area">
                    PLEARN is a 3D game that teaches players the basics of
                    managing money and investments. PLEARN has a varity of
                    features, interactive graphics, realistic scenarios, and
                    entertaining educational elements that keep players engaged.
                  </p>
                  <div class="btm btn">
                    <a
                      class="qodef-shortcode qodef-m  qodef-button qodef-layout--outlined  qodef-html--link"
                      href="https://artorias.qodeinteractive.com/about-us/"
                      target="_self"
                    >
                      {" "}
                      <span class="qodef-m-text">KNOW MORE</span>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  padding-top: 5%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .ms {
    display: flex;
    transition: background 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s;
    padding: 0;
    width: 100vw;
    height: 100vh;

    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    .elementor-column {
      display: flex;
      .elementor-element-populated {
        padding: 20% 13% 20% 17%;
        display: flex;
        position: relative;
        width: 100%;
        flex-wrap: wrap;
        vertical-align: baseline;
        margin: 0;
        outline: 0;
        .qodef-section-title {
          justify-content: end;
          justify-items: end;
          text-align: end;
          display: flex;
          flex-direction: column;
          .qodef-m-tagline {
            font-family: "Space Mono", sans-serif;
            font-size: 17px;
            line-height: 1.76471em;
            font-weight: 400;
            letter-spacing: normal;
            color: white;
            grid-area: tagline;
            letter-spacing: 0.06em;
            margin: 7px 0 0 0;
            place-self: end;
            text-transform: uppercase;
            transform: rotate(180deg);
            writing-mode: vertical-lr;
          }
          h2 {
            font-family: Rubik, sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            font-size: 38px;
            margin: 0;
            line-height: 1.15789em;
            margin: 25px 0;
            -ms-word-wrap: break-word;
            word-wrap: break-word;
            transform: translate(-55px, -128px);
          }
          .qodef-m-text-area {
            margin: 18px 0 0;
            transform: translate(-55px, -128px);
          }
          .btm {
            display: inline-block;
            font-size: 17px;
            background: transparent;
            border: none;
            padding: 1rem 1rem;
            text-transform: uppercase;
            position: relative;
            text-align: center;
            transition: 0.5s ease;
            a {
              color: white;
              transition: 0.5s ease;
            }
          }
          .btm:hover {
            a {
              color: black;
              transition: 0.8s ease;
            }
          }

          .btm::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            width: 100%;
            background-color: white;
            transition: 0.5s ease;
          }

          .btmn:hover::before {
            width: 100%;
          }

          .btm::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 0;
            width: 100%;
            background-color: white;
            transition: 0.4s ease;
            z-index: -1;
          }

          .btm:hover::after {
            height: 100%;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .elementor-column {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    .elementor-column {
      width: 100%;
    }
    .ms {
      flex-direction: column;
    }
  }
`;
