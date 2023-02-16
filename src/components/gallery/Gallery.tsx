import {useState} from "react";
import {useAppSelector} from "../../features/hooks";
import LightBox from "./LightBox";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
	const {gallery, lightBoxStatus} = useAppSelector((state) => state.gallery);
	const [heading] = useState("Travelers captured images");
	return (
		<>
			{lightBoxStatus ? <LightBox /> : ""}
			<div className="gallery">
				<div className="container">
					<h2 className="heading mb-55 headingAnimation">{heading}</h2>
					<div className="row">
						{gallery.length > 0
							? gallery.map((glr, index) => (
									<GalleryImage
										key={index}
										glr={glr}
									/>
							  ))
							: ""}
					</div>
				</div>
			</div>
		</>
	);
};
export default Gallery;
