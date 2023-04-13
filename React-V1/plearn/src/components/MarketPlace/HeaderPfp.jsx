import React from "react";
import styled from "styled-components";
import coinEth from "../../assets/MarketPlace/Frame-251-5.png";
export default function HeaderPfp() {
  return (
    <Container>
      <img src={coinEth}  alt="" />
    </Container>
  );
}
const Container = styled.div`
  img {
    width: 100%;
  }
  width: 60%;
  display: flex;
  height: 100%;
`;
