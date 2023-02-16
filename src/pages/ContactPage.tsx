import PageContainer from "../components/pages-parts/PageContainer";
import ContactForm from "../components/pages-parts/ContactForm";

import React, {useEffect, useState} from "react";

const ContactPage = () => {
	const [state] = useState({
		heading: "contact us",
		pageHeading: "leave your message in the contact form",
		message:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eius quas, dolores voluptates perspiciatis suscipit nam inventore sed autem assumenda. Nemo nulla tempore ex quae eveniet earum magni ducimus necessitatibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eius quas, dolores voluptates perspiciatis suscipit nam inventore sed autem assumenda. Nemo nulla tempore ex quae eveniet earum magni ducimus necessitatibus.",
	});
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			{/* <Helmet>
				<title>Contact page</title>
				<meta
					name="description"
					content="travel friends contact page"
				/>
			</Helmet> */}
			<PageContainer
				heading={state.heading}
				pageHeading={state.pageHeading}
				message={state.message}
			>
				<ContactForm />
			</PageContainer>
		</>
	);
};
export default ContactPage;
