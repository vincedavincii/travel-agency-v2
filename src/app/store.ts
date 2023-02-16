import {configureStore} from "@reduxjs/toolkit";
import destinationReducer from "../features/destinationSlice";
import navReducer from "../features/navSlice";
import modalReducer from "../features/modalSlice";
import galleryReducer from "../features/gallerySlice";

const store = configureStore({
	reducer: {
		destination: destinationReducer,
		nav: navReducer,
		modal: modalReducer,
		gallery: galleryReducer,
	},
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
