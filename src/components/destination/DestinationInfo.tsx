import {useAppSelector} from "../../features/hooks";
import DestinationDetails from "./DestinationDetails";

const DestinationInfo = () => {
	const {details, language, currency} = useAppSelector((state) => {
		return state.destination.details;
	});
	return (
		<div className="destinationInfo">
			<div className="container">
				<h2 className="heading headingAnimation">Overview</h2>
				<div className="row">
					<div className="col-8">
						<p className="destinationInfo__p animation">{details}</p>
					</div>
				</div>
				<h2 className="heading headingAnimation">Good to know</h2>
				<div className="row">
					<div className="col-8">
						<DestinationDetails
							title="Language"
							text={language}
						/>
						<DestinationDetails
							title="Currency"
							text={currency}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DestinationInfo;
