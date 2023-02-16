import {CurrentLightBoxType, openLightBox} from "../../features/gallerySlice";
import {useAppDispatch} from "../../features/hooks";
interface GalleryImageType {
	glr: CurrentLightBoxType;
}
const GalleryImage = ({glr}: GalleryImageType) => {
	const dispatch = useAppDispatch();
	const openGalleryBox = (imageObject: CurrentLightBoxType) => {
		dispatch(openLightBox(imageObject));
	};
	return (
		<div className="col-3">
			<div className="gallery__image animation">
				<img
					src={glr.image}
					onClick={() => openGalleryBox(glr)}
					alt={glr.name}
				/>
			</div>
		</div>
	);
};
export default GalleryImage;
