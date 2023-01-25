import React, { useState } from "react";
import styled from "styled-components";

export default function Card(props) {
  const { user } = props;
  const [thumbnail, removeThumbnail] = useState(false);
  return (
    <Container>
      <div
        className="card"
        onMouseEnter={() => {
          removeThumbnail(true);
        }}
        onMouseLeave={() => {
          removeThumbnail(false);
          console.log(user.Image);
        }}
      >
        <div className="blob"></div>
        <div
          className="img"
          style={{
            background: `url(${
              thumbnail === false ? `${user.thumbnail}` : `${user.Image}`
            })`,
            backgroundSize: "cover",
          }}
        ></div>
        <h2>{user.name}</h2>
        <span className="desc">{user.description}</span>
        <p>
          <a href="">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          <a
            href=""
            style={{ display: `${user.gitLink === "null" ? "none" : ""}` }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .card {
    width: 240px;
    cursor: pointer;
    height: 344px;
    background: #f0f0f0;
    border-radius: 10px;
    text-align: center;
    transition: all 0.5s;
  }

  .card:hover {
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.623);
    background-color: #4bb8ff;
  }

  .card .blob {
    height: 10px;
    width: 75%;
    border-radius: 0 0 30px 30px;
    margin: 0 auto;
    background-color: #4bb8ff;
    visibility: visible;
    transition: all 0.3s;
  }

  .card:hover .blob {
    height: 0;
  }

  .card .img {
    display: flex;
    margin: 30px auto 10px auto;
    width: 15.55vw !important;
    height: 32vh;
    background-size: cover;
    border-radius: 50%;
    font-size: 11px;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }

  .card:hover .img {
    width: 100%;
    height: 70%;
    background-size: cover;
    border-radius: 10px 0 0;
    margin: 0 auto;
    transition: all 0.7s;
    z-index: 99999;
  }

  .card h2 {
    padding: 15px 10px;
    font-size: 25px;
    transition: all 0.1s;
    color: black !important;
    line-height: 17px;
  }

  .card span {
    font-size: 16px;
  }
  .card .desc {
    margin-top: 10px;
    display: none;
    margin-bottom: 10px;
  }
  .card:hover .desc {
    display: block;
  }
  .card:hover h2 {
    opacity: 0;
    display: none;
    transition: all 0.7s;
  }

  .card > p {
    opacity: 0;
    transition: all 0.1s;
    gap: 1rem;
    position: absolute;
    left: 208px;
    display: inline-flex;
  }

  .card > p > a > svg {
    padding: 5px;
    color: white;
  }

  .card:hover > p {
    position: absolute;
    bottom: 15px;
    left: 85px;
    opacity: 1;
    transition: all 0.7s;
  }
  @media only screen and (max-width: 1008px) {
    .card .img {
      display: flex;
      margin: 30px auto 10px auto;
      width: 22vw !important;
    }
  }

  @media only screen and (max-width: 708px) {
    .card .img {
      display: flex;
      margin: 30px auto 10px auto;
      width: 32vw !important;
    }
  }
  @media only screen and (max-width: 555px) {
    .card .img {
      display: flex;
      margin: 30px auto 10px auto;
      width: 45vw !important;
    }
  }
`;
