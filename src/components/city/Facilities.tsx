import {BsCheck, BsX} from "react-icons/bs";

interface FacilitiesProps {
	name: string;
	value: boolean;
}
const Facilities = ({name, value}: FacilitiesProps) => {
	return (
		<div className="cities__body__contents__facilities">
			<div className="cities__body__contents__facilities__name">{name}</div>
			<div className="cities__body__contents__facilities__value">
				{value ? (
					<BsCheck
						size={20}
						color="#34D399"
					/>
				) : (
					<BsX
						size={20}
						color="#ff4d58"
					/>
				)}
			</div>
		</div>
	);
};
export default Facilities;
