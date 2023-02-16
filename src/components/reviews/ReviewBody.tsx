import {BsFillStarFill, BsStar} from "react-icons/bs";

interface ReviewBodyProp {
	name: string;
	comment: string;
	stars: number;
	image: string;
}
const ReviewBody = ({name, comment, stars, image}: ReviewBodyProp) => {
	const rating = (num: number) => {
		let container = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= num) {
				container.push(
					<BsFillStarFill
						key={i}
						size={13}
						color="#df2189"
						className="reviews__body__contents__info__rating__icon"
					/>
				);
			} else {
				container.push(
					<BsStar
						key={i}
						size={13}
						color="#df2189"
						className="reviews__body__contents__info__rating__icon"
					/>
				);
			}
		}
		return container;
	};
	return (
		<div className="col-4 p-15">
			<div className="reviews__body animation">
				<div className="reviews__body__contents">
					<div className="reviews__body__contents__image">
						<img
							src={image}
							alt={image}
						/>
					</div>
					<div className="reviews__body__contents__info">
						<div className="reviews__body__contents__info__name">{name}</div>
						<div className="reviews__body__contents__info__rating">
							{rating(stars)}
						</div>
						<div className="reviews__body__contents__info__comment">
							{comment}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ReviewBody;
