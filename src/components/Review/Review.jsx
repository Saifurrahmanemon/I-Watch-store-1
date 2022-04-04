import React from "react";
import img from "../../images/customer-image.png";
import {
    CardImage,
    CardImageContainer,
    CardRatings,
    CardText,
    CardTitle,
    ReviewCard,
} from "./ReviewStyled";

const Review = ({ review }) => {
    const { name, ratings, text } = review;
    return (
        <ReviewCard>
            <CardImageContainer>
                <CardImage src={img} alt={name}></CardImage>
                <CardRatings>{ratings}/10</CardRatings>
            </CardImageContainer>
            <CardTitle>{name}</CardTitle>
            <CardText>{text}</CardText>
        </ReviewCard>
    );
};

export default Review;
