import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/CartPage/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
