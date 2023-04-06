import React, { useState } from "react";
import styled from "styled-components";
export default function Category() {
  const Category = ({ setFilter }) => {
    return (
      <Cat className="Cat">
        <button onClick={() => setFilter("all")}>ALL</button>
        <button onClick={() => setFilter("Accessories")}>Accessories</button>
        <button onClick={() => setFilter("Character")}>Character</button>
        <button onClick={() => setFilter("Dice")}>Dice</button>
      </Cat>
    );
  };
}

const Cat = styled.div`
  display: flex;
  display: flex;
  min-width: 40vw;
  margin-top: 40px;
  justify-content: space-evenly;
  button {
    background: #fbca1f;
    font-family: inherit;
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em;
  }

  button:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em;
  }

  button:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
  }
`;
