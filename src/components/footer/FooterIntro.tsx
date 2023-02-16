import {useState} from "react";
const FooterIntro = () => {
	const [state] = useState({
		logo: "/assets/footer/logo.png",
		intro:
			"Travel friends is a traveling agency, we arrange tours to the world famous and most beautiful countries, Since 2005 we provide high quality services to our valuable customers.",
	});
	return (
		<div className="footer__intro">
			<div className="footer__intro__img animation">
				<img
					src={state.logo}
					alt="footer logo"
				/>
			</div>
			<p className="footer__intro__msg animation">{state.intro}</p>
		</div>
	);
};
export default FooterIntro;
