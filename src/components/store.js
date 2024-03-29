import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers";

const store = configureStore({
	reducer: {
		cart: cartReducer, // Misalnya, reducer Anda disimpan di bawah kunci 'cart'
	},
});

export default store;
