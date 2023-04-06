import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/data";
const initialState = {
  cards: data,
  filteredCards: [],
  filterActive: false,
};

const Tools = createSlice({
  name: "Tool",
  initialState,
  reducers: {
    filterCards(state, action) {
      if (state.filteredCards.includes(action.payload)) {
        // Remove category if it already exists in the array
        state.filteredCards = state.filteredCards.filter(
          (category) => category !== action.payload
        );
      } else {
        // Add category to the array
        state.filteredCards.push(action.payload);
      }
    },
    // resetAll(state, action) {},
    setFilterActive: (state, action) => {
      state.filterActive = action.payload;
    },
  },
});
export const { filterCards, setFilterActive } = Tools.actions;
export { Tools };
