import CityPictures from "./CityPictures";
import CityContents from "./CityContents";
import {useAppSelector} from "../../features/hooks";

const Cities = () => {
	const destinations = useAppSelector((state) => {
		return state.destination;
	});

	const {details, selectedCity} = destinations;
	return (
		<div className="cities">
			<div className="container">
				<div className="cities__container">
					<h2 className="heading headingAnimation">cities in {details.name}</h2>
					<div className="row ml-minus-15 mr-minus-15">
						{selectedCity.length > 0
							? selectedCity.map((city) => (
									<div
										className="col-3 p-15"
										key={city.id}
									>
										<div className="cities__body animation">
											<CityPictures
												img={city.image}
												status={city.status}
											/>
											<CityContents
												name={city.name}
												duration={city.duration}
												price={city.price}
												room={city.room}
												food={city.food}
											/>
										</div>
									</div>
							  ))
							: `No cities in ${details.name}`}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Cities;
