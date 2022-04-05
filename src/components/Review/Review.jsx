import React from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import img from "../../images/customer-image.png";
import {
    CardImage,
    CardImageContainer,
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
                <Rating
                    initialRating={ratings}
                    emptySymbol={<FaStar />}
                    fullSymbol={<FaStar style={{ color: "goldenrod" }} />}
                    readonly
                ></Rating>
            </CardImageContainer>
            <CardTitle>{name}</CardTitle>
            <CardText>{text}</CardText>
        </ReviewCard>
    );
};

export default Review;
