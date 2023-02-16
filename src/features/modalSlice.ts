import {PayloadAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
	current: "",
	modalOpen: false,
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		openModal: (state, action: PayloadAction<string>) => {
			state.modalOpen = true;
			state.current = action.payload;
		},
		closeModal: (state) => {
			state.modalOpen = false;
			state.current = "";
		},
	},
});
export default modalSlice.reducer;
export const {openModal, closeModal} = modalSlice.actions;
