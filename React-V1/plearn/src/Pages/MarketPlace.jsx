import React, { useState } from "react";
import styled from "styled-components";
import CardLoader from "../components/CardLoader";
import Header from "../components/MarketPlace/Header";
import SortingTab from "../components/SortingTab";
import Cards from "../components/MarketPlace/Cards";
import { useDispatch, useSelector } from "react-redux";
import { setFilterActive, filterCards } from "../Store/Slice/userSlice";
import Category from "../components/MarketPlace/Category";
export default function MarketPlace() {
  const filterActive = useSelector((state) => state.tools.filterActive);
  const card = useSelector((state) => state.tools.cards);
  const filteredCards = useSelector((state) => state.tools.filteredCards);
  console.log(filterActive);
  const cardData = filterActive ? filteredCards : card;
  const [ShopState, SetShop] = useState(true);
  function Root() {
    const cardsByCategory = card.reduce((accumulator, currentCard) => {
      const category = currentCard.Category;
      if (!accumulator[category]) {
        accumulator[category] = [];
      }
      accumulator[category].push(currentCard);
      return accumulator;
    }, {});

    return (
      <>
        <div className="left">
          {Object.entries(cardsByCategory).map(
            ([categoryName, categoryCards]) => (
              <MainFolder key={categoryName}>
                <div className="Head">
                  <h1>{categoryName}</h1>
                  <div
                    className="span"
                    onClick={() => {
                      SetShop(false);
                    }}
                  >
                    View all
                  </div>
                </div>
                <CardLoader data={categoryCards} />
              </MainFolder>
            )
          )}
        </div>
      </>
    );
  }

  return (
    <Main>
      <Header />
      <SortingTab ShopState={ShopState} />
      <Market>
        <div className="left">
          {ShopState === false ? (
            <>
              <Category />
              <ShopAll>
                {cardData.map((Category) => (
                  <Cards data={Category} />
                ))}
              </ShopAll>
            </>
          ) : (
            <Root />
          )}
        </div>
      </Market>
    </Main>
  );
}
const ShopAll = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;
const Main = styled.section`
  background-attachment: fixed !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background: black;
`;

const MainFolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vh;
  margin-top: 20px;
  overflow: auto;
  .span {
    display: inline-block;
    cursor: pointer;

    vertical-align: bottom;
    white-space: nowrap;
  }
  .Head {
    display: flex;
    height: 5vh;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
      font-family: "Space Mono", sans-serif;
      font-size: 36px;
      line-height: 0px;
      font-weight: 600;
      color: #cacaca;
    }
  }
`;
const Market = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  .left {
    max-width: 85vw;
    min-width: 85vw;
  }
`;
