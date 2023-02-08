import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../utils/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import beshoy from "../assets/Images/Images/Beshoy.png";
import nada from "../assets/Images/Images/Nada.png";
import Paolino from "../assets/Images/Images/Paolino.png";
import Rawan from "../assets/Images/Images/RAWAN.png";
import Ujjwal from "../assets/Images/Images/Ujjwal.png";
import Sanskar from "../assets/Images/Images/Sanskar.png";
import Souad from "../assets/Images/Images/Souad.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Team from "./Team";
export default function Toke() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Nada Jabr ",
      gitLink: "null",
      linkedInLink: "https://www.linkedin.com/in/nada-jabr-15838b39/",
      description: "Founder | CEO",
      Image: nada,
    },
    {
      id: 2,
      name: "Beshoy Shehata",
      gitLink: "null",
      linkedInLink: "https://www.linkedin.com/in/beshoy/",
      description: "Tech Lead",
      Image: beshoy,
    },
    {
      id: 3,
      name: "Rawan Mohsen",
      gitLink: "null",
      linkedInLink: "https://www.linkedin.com/in/nada-jabr-15838b39/",
      description: "Project Manager|Product Owner",
      email: "",
      Image: Rawan,
    },
    {
      id: 4,
      name: "Paolino Pagliuso",
      gitLink: "null",
      linkedInLink: "https://www.linkedin.com/in/paolino-pagliuso/",
      description: "Social Media Manager",
      Image: Paolino,
    },
    {
      id: 5,
      name: " Souad",
      gitLink: "null",
      linkedInLink: "https://www.linkedin.com/in/souad-allahham-084618129",
      description: "Financial officer",
      Image: Souad,
    },
    {
      id: 6,
      name: "Ujjwal Sachdeva",
      linkedInLink: "https://www.linkedin.com/in/ujjwal-sachdeva-5064651b4/",
      gitLink: "https://github.com/ujjwal-webdev",
      description: " Game | Backend  developer ",
      Image: Ujjwal,
    },
    {
      id: 7,
      name: "Sanskar Tyagi ",
      gitLink: "https://github.com/Sanskar-tyagi",
      linkedInLink: "https://www.linkedin.com/in/sanskar-tyagi-953a921b1/ ",
      description: "Front-end developer",
      Image: Sanskar,
    },
    // more users
  ]);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [num, setNum] = useState(4);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    if (viewportWidth < 1000) {
      setNum(3);
    }
    if (viewportWidth < 800) {
      setNum(2);
    }
    if (viewportWidth <= 500) {
      setNum(1);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewportWidth]);

  return (
    <Main>
      {/* <Container>
        <div className="wills">
          <img
            src="https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/p2-img-1.jpg"
            alt=""
          />
          <p className="title">
            PLEARN is a virtual board game aims to raise the awareness of
            financial literacy. PLEARN has a variety of features, interactive
            graphics, realistic scenarios, and entertaining educational elements
            that keep players engaged. The game tests the players'
            problem-solving skills. And also has levels that progressively
            increase in difficulty, allowing players to learn more as they
            advance. Players could track their learning and playing progress
            through the game, while earning rewards and unlocking new areas.
          </p>
          <button>About Us</button>
        </div>
      </Container> */}
      <Team />
      <Swiper
        slidesPerView={num}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <Card user={user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Main>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  background-image: url(https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/nft-home-img-11.jpg);
  background-position: center center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 120px 0px 120px;
  .wills {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 36vw;
    img {
      width: 36vw;
      transition: 0.5s ease;
      backface-visibility: hidden;
      opacity: 0;
      cursor: pointer;
    }
    &:hover {
      filter: brightness(80%);
      .title {
        opacity: 1;
        filter: brightness(100%);
        visibility: visible;
      }
      button {
        transition: 0.8s ease;
        top: 100%;
      }
    }

    .title {
      width: 50vw;
      transition: 0.5s ease;
      opacity: 0;
      position: absolute;
      top: 50%;
      cursor: pointer;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      text-align: center;
      font-family: Rubik, sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-size: 20px;
      line-height: 1.5em;
      margin: 25px 0;
      -ms-word-wrap: break-word;
      word-wrap: break-word;
    }
    @media only screen and (max-width: 1200px) {
      .title {
        width: 74vw;
        font-size: 16px;
      }
      button,
      button::after {
        padding: 9px 17px !important;
        font-size: 14px !important;
      }
      button:hover {
        top: 120% !important;
      }
    }
    @media only screen and (max-width: 500px) {
      button:hover {
        top: 140% !important;
      }
    }
    @media only screen and (max-width: 800px) {
      .title {
        width: 94vw;
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
        opacity: 0;
        position: absolute;
        font-size: large;
        top: 26%;
        font-size: 33px;
        cursor: pointer;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
        font-family: Rubik, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        -webkit-letter-spacing: 0.06em;
        -moz-letter-spacing: 0.06em;
        -ms-letter-spacing: 0.06em;
        letter-spacing: 0.06em;
        font-size: 12px;
        line-height: 1.5em;
        margin: 25px 0;
        -ms-word-wrap: break-word;
        word-wrap: break-word;
      }
      button,
      button::after {
        padding: 8px 12px !important;
        font-size: 12px !important;
        background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
        border: 0;
        color: #fff;
        -webkit-letter-spacing: 3px;
        -moz-letter-spacing: 3px;
        -ms-letter-spacing: 3px;
        letter-spacing: 2px;
        line-height: 1;
        box-shadow: 6px 0px 0px #00e6f6;
        outline: transparent;
      }
      button:hover {
        top: 135% !important;
      }
    }

    button {
      position: absolute;
      top: 50%;
      transition: 0.8s ease;
      transform: translate(-50%, -50%);
      left: 50%;
      opacity: 1;
      display: inline-block;
      cursor: pointer;
      outline: none;
      border: 0;
      vertical-align: middle;
      text-decoration: none;
      font-family: inherit;
      font-size: 15px;
      text-transform: uppercase;

      visibility: visible;
    }
    button,
    button::after {
      padding: 16px 20px;
      font-size: 18px;
      background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
      border: 0;
      color: #fff;
      letter-spacing: 3px;
      line-height: 1;
      box-shadow: 6px 0px 0px #00e6f6;
      outline: transparent;
    }

    button::after {
      --slice-0: inset(50% 50% 50% 50%);
      --slice-1: inset(80% -6px 0 0);
      --slice-2: inset(50% -6px 30% 0);
      --slice-3: inset(10% -6px 85% 0);
      --slice-4: inset(40% -6px 43% 0);
      --slice-5: inset(80% -6px 5% 0);
      content: "HOVER ME";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        45deg,
        transparent 3%,
        #00e6f6 3%,
        #00e6f6 5%,
        #ff013c 5%
      );
      text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
      clip-path: var(--slice-0);
    }

    button:hover::after {
      animation: 1s glitch;
      animation-timing-function: steps(2, end);
    }

    @keyframes glitch {
      0% {
        clip-path: var(--slice-1);
        transform: translate(-20px, -10px);
      }

      10% {
        clip-path: var(--slice-3);
        transform: translate(10px, 10px);
      }

      20% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 10px);
      }

      30% {
        clip-path: var(--slice-3);
        transform: translate(0px, 5px);
      }

      40% {
        clip-path: var(--slice-2);
        transform: translate(-5px, 0px);
      }

      50% {
        clip-path: var(--slice-3);
        transform: translate(5px, 0px);
      }

      60% {
        clip-path: var(--slice-4);
        transform: translate(5px, 10px);
      }

      70% {
        clip-path: var(--slice-2);
        transform: translate(-10px, 10px);
      }

      80% {
        clip-path: var(--slice-5);
        transform: translate(20px, -10px);
      }

      90% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 0px);
      }

      100% {
        clip-path: var(--slice-1);
        transform: translate(0);
      }
    }
  }
`;

const Main = styled.div`
  margin-top: 100px;
  .card-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    margin-top: 80px;

    margin-bottom: 140px;
    text-align: center;
    font-size: 18px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide .card {
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    background: white;
  }
  .swiper-pagination {
    padding-bottom: 40px;
  }
  .swiper-pagination-bullet-active:before {
    content: "SWIPE!";
    top: 30px;
    left: 0;
    right: 0;
    position: absolute;
  }
`;
