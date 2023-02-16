import {useState} from "react";

const AboutImage = () => {
	const [image] = useState("/assets/about/about.jpg");
	return (
		<div className="page__image">
			<img
				src={image}
				alt="about-image"
			/>
		</div>
	);
};
export default AboutImage;
