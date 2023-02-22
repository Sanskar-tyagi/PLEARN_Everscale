import React from "react";
import styled from "styled-components";
export default function Team() {
  return (
    <Container>
      <div class="widget-container">
        <div class="qodef-shortcode ">
          <span class="qodef-m-tagline">
            <span class="qodef-m-tagline-inner">Team </span>
          </span>
          <h3 class="qodef-m-title">
            <span class="qodef-m-title-inner">
              our team of experts for{" "}
              <span style={{ textDecoration: "underline" }}>
                {" "}
                creating fun learning
              </span>{" "}
            </span>
          </h3>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .widget-container {
    display: grid;
    grid-template-areas:
      "tagline title"
      "tagline subtitle"
      "tagline text-area"
      "tagline button";
    padding: 0% 14% 0% 45%;
    .qodef-shortcode {
      justify-content: end;
      justify-items: end;
      text-align: end;
      --qodef-start-x: 105%;
      overflow: hidden;
      --qodef-start-x: -105%;
      --qodef-start-y: -120%;
      column-gap: var(30px, 31px);
      display: grid;
      .qodef-m-tagline {
        grid-area: tagline;
        font-family: "Space Mono", sans-serif;
        font-size: 17px;
        line-height: 1.76471em;
        font-weight: 400;
        letter-spacing: normal;
        color: var(--qode-main-color);
        letter-spacing: 0.06em;
        margin: 7px 0 0 0;
        place-self: start;
        text-transform: uppercase;
        transform: rotate(180deg);
        -ms-writing-mode: tb-lr;
        overflow: hidden;
        writing-mode: vertical-lr;
        .qodef-m-tagline-inner {
          display: inline-block;
          transform: translateY(0) translateX(0);
          transition: transform 1s 0.5s cubic-bezier(0.44, 1.1, 0.53, 0.99);
        }
      }
      .qodef-m-title {
        grid-area: title;
        margin: 0;
        font-family: Rubik, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--qode-main-color);
        font-size: 33px;
        line-height: 1.27273em;
        -ms-word-wrap: break-word;
        word-wrap: break-word;
      }
    }
  }
  @media only screen and (max-width: 700px) {
    .widget-container {
      padding: 0% 5% 0% 8%;
    }
  }
`;
