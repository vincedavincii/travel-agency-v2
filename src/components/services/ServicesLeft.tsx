interface ServiceLeftProps {
	heading: string;
	subHeading: string;
}

const ServicesLeft = ({heading, subHeading}: ServiceLeftProps) => {
	return (
		<div className="services__left">
			<h1 className="services__left__heading animation">{heading}</h1>
			<p className="services__left__paragraph animation">{subHeading}</p>
		</div>
	);
};
export default ServicesLeft;
