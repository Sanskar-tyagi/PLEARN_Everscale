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
  const users = [
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
  ];
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
    display: flex;
    justify-content: center;
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
