import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import layoutSLice from "./layout-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, ui: layoutSLice.reducer },
});

export default store;
