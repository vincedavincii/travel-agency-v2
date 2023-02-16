export interface CitiesType {
	id: number;
	name: string;
	price: number;
	image: string;
	duration: string;
	room: boolean;
	food: boolean;
	status: string;
	destinationId: number;
}
export interface SelectedCityType {
	id: number;
	name: string;
	price: number;
	image: string;
	duration: string;
	room: boolean;
	food: boolean;
	status: string;
	destinationId: number;
}

export interface DestinationType {
	id: number;
	name: string;
	details: string;
	image: string;
	bigImage: string;
	language: string;
	currency: string;
}
export interface DetailsType {
	id: number;
	name: string;
	details: string;
	image: string;
	bigImage: string;
	language: string;
	currency: string;
}
export interface InitialStateDestination {
	destinations: DestinationType[];
	details: DetailsType;
	cities: CitiesType[];
	selectedCity: CitiesType[];
}

export interface ReviewsType {
	id: number;
	name: string;
	comment: string;
	stars: number;
	image: string;
}
