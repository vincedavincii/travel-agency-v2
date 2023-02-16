import React, {useState, useEffect} from "react";
import Header from "../components/headers/Header";
import Destinations from "../components/destination/Destinations";
import Modal from "../components/headers/Modal";
import Register from "../auth/Register";
import Login from "../auth/Login";
import {openModal} from "../features/modalSlice";
import {useAppDispatch} from "../features/hooks";
import Services from "../components/services/Services";
import Reviews from "../components/reviews/Reviews";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";

const HomePage = () => {
	const dispatch = useAppDispatch();
	const [registerModal] = useState("registerModal");
	const [loginModal] = useState("loginModal");

	const [state] = useState({
		heading: "Your trusted travel partner",
		paragraph:
			"The world is a book and those who do not travel read only one page. Lets help you make great memories",
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			{/* <Helmet>
				<title>Travel Partner</title>
				<meta
					name="description"
					content="Travel to the world with travel frirends"
				/>
				<meta
					name="keywords"
					content="travel, travel tours, airline"
				/>
			</Helmet> */}
			<Header
				heading={state.heading}
				paragraph={state.paragraph}
			>
				<button
					onClick={() => dispatch(openModal("registerModal"))}
					className="btn-default"
				>
					Get Started
				</button>
			</Header>

			<Modal current={registerModal}>
				<Register currentModal={loginModal} />
			</Modal>

			<Modal current={loginModal}>
				<Login currentModal={registerModal} />
			</Modal>

			<Destinations />
			<Services />
			<Reviews />
			<Gallery />
			<Footer />
		</>
	);
};

export default HomePage;
