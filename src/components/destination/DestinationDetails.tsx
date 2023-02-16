interface DestinationDetailsProps {
	title: string;
	text: string;
}

const DestinationDetails = ({title, text}: DestinationDetailsProps) => {
	return (
		<div className="destinationInfo__details">
			<div className="destinationInfo__details__head animation">{title}</div>
			<div className="destinationInfo__details__text animation">{text}</div>
		</div>
	);
};
export default DestinationDetails;
