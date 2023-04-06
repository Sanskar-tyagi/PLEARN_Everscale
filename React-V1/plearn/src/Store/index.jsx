import { configureStore } from "@reduxjs/toolkit";
import { Tools } from "./Slice/userSlice";

const store = configureStore({
  reducer: {
    tools: Tools.reducer,
  },
});

export default store;
