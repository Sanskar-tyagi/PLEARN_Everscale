import React from "react";
import styled from "styled-components";
import coinEth from "../../assets/MarketPlace/Frame-251-5.png";
import coinBit from "../../assets/MarketPlace/A (1).png";
import coinMnc from "../../assets/MarketPlace/A (4).png";
import coinMpc from "../../assets/MarketPlace/A (2).png";
export default function HeaderPfp() {
  return (
    <Container>
      <img src={coinEth} alt="" />
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
