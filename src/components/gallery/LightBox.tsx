import {closeLightBox} from "../../features/gallerySlice";
import {useAppDispatch, useAppSelector} from "../../features/hooks";

const LightBox = () => {
	const dispatch = useAppDispatch();
	const currentLightBox = useAppSelector(
		(state) => state.gallery.currentLightBox
	);
	const closeGalleryBox = (e: React.MouseEvent<Element>) => {
		const className = (e.target as HTMLElement).getAttribute("class");
		if (className === "gallery__lightbox") {
			dispatch(closeLightBox());
		}
	};
	return (
		<div
			className="gallery__lightbox"
			onClick={closeGalleryBox}
		>
			<h4>{currentLightBox.name}</h4>
			<div className="gallery__lightbox__card">
				<div className="gallery__lightbox__card__image">
					<img
						src={currentLightBox.image}
						alt={currentLightBox.name}
					/>
				</div>
			</div>
		</div>
	);
};
export default LightBox;
