import {useState} from "react";
import reviews from "../../data/reviews";
import ReviewBody from "./ReviewBody";

const Reviews = () => {
	const [heading] = useState("What our customers are saying?");
	const [userReviews] = useState(reviews);

	return (
		<div className="reviews">
			<div className="container">
				<h2 className="heading headingAnimation">{heading}</h2>
				<div className="row ml-minus-15 mr-minus-15">
					{userReviews.length > 0
						? userReviews.map((review, index) => (
								<ReviewBody
									key={index}
									comment={review.comment}
									name={review.name}
									image={review.image}
									stars={review.stars}
								/>
						  ))
						: ""}
				</div>
			</div>
		</div>
	);
};
export default Reviews;
