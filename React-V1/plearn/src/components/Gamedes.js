import React from "react";
import styled from "styled-components";
export default function Gamedes() {
  return (
    <Container>
      <div className="ms">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          vero recusandae sint laudantium! Odit quis delectus deleniti itaque
          dolores similique fugit. Eaque animi quaerat tempore odit dolorum
          iusto qui doloribus.
        </p>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .ms {
    border-style: solid;
    border-width: 1px 0;
    border-color: #fff;
    transition: background 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s;
    padding: 0;
    width: 90vw;
    height: 100vh;
    background-image: url(https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/landing-image-1.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    p {
      margin-top: 10vh;
      padding: 10vw;
    }
  }
`;
