import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/data";
const initialState = {
  cards: data,
  filteredCards: [],
  searchQuery: "",
  sortBy: "",
};
const Tools = createSlice({
  name: "Tool",
  initialState,
  reducers: {
    filterCards(state, action) {
      if (action.payload === "All" && state.searchQuery.length === 0) {
        state.filteredCards = data;
      } else {
        state.filteredCards = state.cards.filter(
          (card) => card.Category === action.payload
        );
      }
      state.filterActive = true;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
      state.filterActive = true;
      state.filteredCards = state.cards.filter(
        (card) =>
          card.Name.includes(action.payload) ||
          card.Category.includes(action.payload)
      );
    },

    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { filterCards, setSearchQuery, setSortBy } = Tools.actions;
export { Tools };
