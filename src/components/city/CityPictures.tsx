//import {LazyLoadImage} from "react-lazy-load-image-component";

interface CityPicturesType {
	img: string;
	status: string;
}
const CityPictures = ({img, status}: CityPicturesType) => {
	return (
		<div className="cities__body__image">
			<img
				src={img}
				alt={img}
			/>
			{/* <LazyLoadImage
				src={img}
				alt={img}
			/> */}
			<div
				className={
					status === "Bestselling"
						? "bestselling"
						: status === "New"
						? "new"
						: status === "Hot"
						? "hot"
						: ""
				}
			>
				{status}
			</div>
		</div>
	);
};
export default CityPictures;
