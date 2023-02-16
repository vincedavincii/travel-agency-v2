// import React, {useContext, useEffect} from "react";
// import {useParams} from "react-router-dom";
// import {Helmet} from "react-helmet-async";
// import DestinationContext from "../context/DestinationContext";
// import {CITIES, DETAILS} from "../context/types/DestinationTypes";
// import Header from "../components/Header";
// import DestinationInfo from "../components/destination/DestinationInfo";
// import City from "../components/city/City";
// import Footer from "../components/footer/Footer";

import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../features/hooks";
import {useEffect} from "react";
import {
	setDestinationDetails,
	setSelectedCity,
} from "../features/destinationSlice";
import Header from "../components/headers/Header";
import DestinationInfo from "../components/destination/DestinationInfo";
import Cities from "../components/city/City";
import Footer from "../components/footer/Footer";

const DetailsPage = () => {
	const destinations = useAppSelector((state) => {
		return state.destination;
	});
	const dispatch = useAppDispatch();
	const {details, selectedCity} = destinations;
	const {id} = useParams();

	useEffect(() => {
		if (id) {
			dispatch(setDestinationDetails(id));
			dispatch(setSelectedCity(id));
		}
		window.scrollTo(0, 0);
	}, [id]);
	return (
		<>
			{/* <Helmet>
				<title>{details.name}</title>
			</Helmet> */}
			<Header
				heading={details.name}
				image={details.bigImage}
			></Header>
			<DestinationInfo />
			<Cities />
			<Footer />
		</>
	);
};

export default DetailsPage;
