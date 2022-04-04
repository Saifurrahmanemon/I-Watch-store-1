import React from "react";
import Review from "../../components/Review/Review";
import useReviews from "../../Hooks/useReviews";
import { ReviewsWrapper, Title } from "./ReviewsStyled";
const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <Title>Customer Reviews</Title>
            <ReviewsWrapper>
                {reviews.map((review) => (
                    <Review key={review.id} review={review} />
                ))}
            </ReviewsWrapper>
        </div>
    );
};

export default Reviews;
