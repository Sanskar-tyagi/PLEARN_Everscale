import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import styled from "styled-components";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: "https://www.youtube.com/embed/gMXCwZ9i0Cs",
      provider: "youtube",
    },
  ],
};
const options = {
  fullscreen: {
    enabled: true,
    iosNative: false,
  },
  controls: [
    "play-large",
    "play",
    "progress",
    "duration",
    "mute",
    "volume",
    "fullscreen",
  ],
  autoplay: true,
  muted: true,
  loop: { active: true },
  storage: { enabled: false },
};

export default function BreadCrums() {
  return (
    <Container>
      <div className="wrapper ">
        <div className="txtcls ">
          <h2>
            <span className="rotate-sm"> PLEARN</span>
            <strong>What's Plearn?</strong>
          </h2>
        </div>

        <div className="news">
          <figure className="article">
            <MyComponent className="ifm" />
          </figure>
        </div>
      </div>
    </Container>
  );
}
export const MyComponent = () => {
  return (
    <>
      <Plyr source={videoSrc} frameborder="0" options={options} />
    </>
  );
};
const Container = styled.div`
  .txtcls {
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: space-between;
    strong {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .rotate-sm {
    font-family: "Space Mono", sans-serif;
    font-size: 10px;
    line-height: 1.76471em;
    font-weight: 400;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    color: white;
    grid-area: tagline;
    -webkit-letter-spacing: 0.06em;
    -moz-letter-spacing: 0.06em;
    -ms-letter-spacing: 0.06em;
    letter-spacing: 0.06em;
    margin: 7px 0 0 0;
    place-self: end;
    text-transform: uppercase;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-writing-mode: vertical-lr;
    -ms-writing-mode: tb;
    writing-mode: vertical-lr;
  }
`;
