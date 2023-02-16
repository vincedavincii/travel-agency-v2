import React, {useEffect, useState} from "react";
import PageContainer from "../components/pages-parts/PageContainer";
import AboutImage from "../components/pages-parts/AboutImage";

const AboutPage = () => {
	const [state] = useState({
		heading: "about us",
		pageHeading: "world best travel agency company since 2005",
		message:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eius quas, dolores voluptates perspiciatis suscipit nam inventore sed autem assumenda. Nemo nulla tempore ex quae eveniet earum magni ducimus necessitatibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eius quas, dolores voluptates perspiciatis suscipit nam inventore sed autem assumenda. Nemo nulla tempore ex quae eveniet earum magni ducimus necessitatibus.",
	});
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			{/* <Helmet>
				<title>About page</title>
				<meta
					name="description"
					content="Travel to the world with travel frirends"
				/>
				<meta
					name="keywords"
					content="travel, travel tours, airline"
				/>
			</Helmet> */}

			<PageContainer
				heading={state.heading}
				pageHeading={state.pageHeading}
				message={state.message}
			>
				<AboutImage />
			</PageContainer>
		</>
	);
};

export default AboutPage;
