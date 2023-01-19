import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

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
    <div>
      <div className="wrapper ">
        {/* <h2>
          <strong>
            All Charachters<span>( 4 )</span>
          </strong>
        </h2>

        <div className="cards">
          <figure className="card">
            <img
              alt="xyz"
              src="https://mrreiha.keybase.pub/codepen/hover-fx/1.jpg"
            />

            <figcaption>Dota 2</figcaption>
          </figure>

          <figure className="card">
            <img
              alt="xyz"
              src="https://mrreiha.keybase.pub/codepen/hover-fx/2.jpg"
            />

            <figcaption>Stick Fight</figcaption>
          </figure>

          <figure className="card">
            <img
              alt="xyz"
              src="https://mrreiha.keybase.pub/codepen/hover-fx/3.jpg"
            />

            <figcaption>Minion Masters</figcaption>
          </figure>

          <figure className="card">
            <img
              alt="xyz"
              src="https://mrreiha.keybase.pub/codepen/hover-fx/4.jpg"
            />

            <figcaption>KoseBoz!</figcaption>
          </figure>
        </div> */}

        <h2>
          <strong>What's Plearn?</strong>
        </h2>

        <div className="news">
          <figure className="article">
            {/* <img
              alt="xyz"
              src="https://mrreiha.keybase.pub/codepen/hover-fx/news2.png"
            /> */}
            <MyComponent className="ifm" />
          </figure>
        </div>
      </div>
    </div>
  );
}
export const MyComponent = () => {
  return (
    <>
      <Plyr source={videoSrc} frameborder="0" options={options} />
    </>
  );
};
