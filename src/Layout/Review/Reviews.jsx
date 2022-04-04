import React, { useEffect, useState } from "react";
import Review from "../../components/Review/Review";
import { ReviewsWrapper, Title } from "./ReviewsStyled";
const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("review.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

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
