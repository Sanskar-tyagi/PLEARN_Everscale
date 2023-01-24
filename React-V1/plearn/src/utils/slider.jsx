import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Carousel = (props) => {
  const background = [
    "https://iili.io/Hlr7vLv.jpg",
    "https://iili.io/Hlr7SBR.jpg",
    "https://iili.io/Hlr742I.jpg",
    "https://iili.io/Hlr7grN.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % background.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div id="carousel-wrapper">
        <div
          id="menu"
          style={{ background: `url(${background[currentIndex]})` }}
        ></div>
      </div>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  height: 100%;
  width: 50%;
  #carousel-wrapper {
    padding: 8%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    #menu {
      width: 100%;
      height: 100%;
      overflow: hidden;
      font-weight: 700;
      line-height: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-size: cover !important;
      vertical-align: middle;
      transition: all 0.6s ease-in-out;
      background-position: center;
      background-repeat: no-repeat;
      z-index: 0;
      transition: 1s;
      #current-option {
        position: relative;
        width: 100%;
        height: 100%;
        transform: translate(-16%, -33%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        #current-option-text1 {
          font-size: 1.2rem;
          color: black;
          line-height: 1.5rem;
          width: 260px;
          height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          &::before {
            content: attr(data-next-text);
            position: absolute;
            transform: translate(0%, 380px);
            width: 100%;
            height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            //background: red;
          }

          &::after {
            content: attr(data-previous-text);
            position: absolute;
            transform: translate(0%, -380px);
            width: 100%;
            height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            //background: red;
          }
        }

        #current-option-text2 {
          font-size: 0.8rem;
          width: 220px;
          height: 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          //background: green;

          &::before {
            content: attr(data-next-text);
            position: absolute;
            transform: translate(0%, 380px);
            width: 100%;
            height: 40px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;
            //background: green;
          }

          &::after {
            content: attr(data-previous-text);
            position: absolute;
            transform: translate(0%, -380px);
            width: 100%;
            height: 40px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;
            //background: green;
          }
        }
      }

      #previous-option {
        width: 1.5rem;
        height: 1.5rem;
        border: none;
        display: block;
        cursor: pointer;
        background: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 256 256'%3E%3Cpolygon points='225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093' fill='%2'%3E%3C/polygon%3E%3C/svg%3E");
        background-size: cover;
        position: absolute;
        transform: translate(260px, 50px);
      }

      #next-option {
        width: 1.5rem;
        height: 1.5rem;
        border: none;
        display: block;
        cursor: pointer;
        background: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 256 256'%3E%3Cpolygon points='225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093' fill='%2'%3E%3C/polygon%3E%3C/svg%3E");
        background-size: cover;
        position: absolute;
        transform: translate(260px, -50px) rotate(180deg);
      }
    }

    .anim-next {
      pointer-events: none;

      #current-option-text1 {
        animation: next-text 0.65s 0.085s;
      }

      #current-option-text2 {
        animation: next-text 0.65s 0.085s;
      }

      #previous-option {
        animation: next-top-arrow 0.65s 0.085s;
      }

      #next-option {
        animation: next-bottom-arrow 0.65s 0.085s;
      }
    }

    .anim-previous {
      pointer-events: none;

      #current-option-text1 {
        animation: previous-text 0.65s 0.085s;
      }

      #current-option-text2 {
        animation: previous-text 0.65s 0.085s;
      }

      #previous-option {
        animation: previous-top-arrow 0.65s 0.085s;
      }

      #next-option {
        animation: previous-bottom-arrow 0.65s 0.085s;
      }
    }
  }
  @media (max-width: 768px) {
     {
      width: 100%;
      #carousel-wrapper {
        padding: 0%;
        #menu {
          border-radius: 0;
          height: 80%;
        }
      }
    }

    #previous-option {
      transform: translate(-50px, 172px) rotate(90deg) !important;
    }
    #next-option {
      transform: translate(0px, 172px) rotate(270deg) !important;
    }
  }
  .box {
    width: 140px;
    height: auto;
    float: left;
    transition: 0.5s linear;
    position: relative;
    display: block;
    overflow: hidden;
    padding: 15px;
    text-align: center;
    margin: 0 5px;
    background: transparent;
    text-transform: uppercase;
    font-weight: 900;
  }

  .box:before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    border-bottom: 4px solid transparent;
    border-left: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(100%);
  }

  .box:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-top: 4px solid transparent;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(-100%);
  }

  .box:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  .box:hover:before {
    border-color: white;
    height: 100%;
    transform: translateX(0);
    transition: 0.3s transform linear, 0.3s height linear 0.3s;
  }

  .box:hover:after {
    border-color: white;
    height: 100%;
    transform: translateX(0);
    transition: 0.3s transform linear, 0.3s height linear 0.5s;
  }
`;
