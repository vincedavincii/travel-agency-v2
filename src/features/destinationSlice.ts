import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import Cities from "../data/cities";
import {destinations} from "../data/destinations";
import {
	CitiesType,
	DestinationType,
	InitialStateDestination,
} from "../utils/constants";

const initialState: InitialStateDestination = {
	destinations: destinations,
	details: {
		id: 0,
		name: "",
		details: "",
		image: "",
		bigImage: "",
		language: "",
		currency: "",
	},
	cities: Cities,
	selectedCity: [
		{
			id: 0,
			name: "",
			price: 0,
			image: "",
			duration: "",
			room: true,
			food: true,
			status: "",
			destinationId: 0,
		},
	] as CitiesType[],
};
const destinationSlice = createSlice({
	name: "destination",
	initialState,
	reducers: {
		setDestinationDetails: (state, action: PayloadAction<string>) => {
			const selectedDestination = state.destinations.find(
				(destination) => destination.id === parseInt(action.payload)
			);
			if (selectedDestination) {
				state.details = selectedDestination;
			}
		},
		setSelectedCity: (state, action: PayloadAction<string>) => {
			const filteredCities = state.cities.filter(
				(city) => city.destinationId === parseInt(action.payload)
			);
			state.selectedCity = filteredCities;
		},
	},
});
export const {setDestinationDetails, setSelectedCity} =
	destinationSlice.actions;
export default destinationSlice.reducer;
