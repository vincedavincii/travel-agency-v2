import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import gallery, {GalleryType} from "../data/gallery";

export interface CurrentLightBoxType {
	id: number;
	name: string;
	image: string;
}

interface GalleryStateType {
	gallery: GalleryType[];
	lightBoxStatus: boolean;
	currentLightBox: CurrentLightBoxType;
}
const initialState: GalleryStateType = {
	gallery,
	lightBoxStatus: false,
	currentLightBox: {
		id: 0,
		name: "",
		image: "",
	},
};

const gallerySlice = createSlice({
	name: "gallery",
	initialState,
	reducers: {
		openLightBox: (state, action: PayloadAction<CurrentLightBoxType>) => {
			state.lightBoxStatus = true;
			state.currentLightBox = action.payload;
		},
		closeLightBox: (state) => {
			state.lightBoxStatus = false;
			state.currentLightBox = {id: 0, name: "", image: ""};
		},
	},
});
export default gallerySlice.reducer;
export const {openLightBox, closeLightBox} = gallerySlice.actions;
