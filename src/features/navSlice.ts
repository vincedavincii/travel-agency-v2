import {createSlice} from "@reduxjs/toolkit";

interface NavStateType {
	toggle: boolean;
}

const initialState: NavStateType = {
	toggle: false,
};

const navSlice = createSlice({
	name: "nav",
	initialState,
	reducers: {
		setToggle: (state) => {
			state.toggle = !state.toggle;
		},
	},
});
export const {setToggle} = navSlice.actions;
export default navSlice.reducer;
