import React from "react";
import { useNavigate } from "react-router-dom";
import Review from "../../components/Review/Review";
import useReviews from "../../Hooks/useReviews";
import appleWatch from "../../images/iwatch.jpg";
import {
    HomeMainWrapper,
    HomeReviewsContainer,
    HomeReviewsWrapper,
    RedirectButton,
    TextBody,
    TextButton,
    TextTitle,
    TextTitleTwo,
    TextWrapper,
} from "./Homestyled";

const Home = () => {
    // custom hook
    const [reviews] = useReviews();
    // number of components to Display
    const reviewsToDisplay = reviews.slice(0, 3);
    const navigate = useNavigate();

    return (
        <div>
            <HomeMainWrapper>
                <TextWrapper>
                    <TextTitle>Your next apple watch</TextTitle>
                    <TextTitleTwo>Unleash the Future</TextTitleTwo>
                    <TextBody>
                        Apple Watch is a wearable smartwatch that allows you to
                        accomplish a variety of tasks, including making phone
                        calls, sending text messages and reading email.
                    </TextBody>
                    <TextButton>Watch Live</TextButton>
                </TextWrapper>
                <div>
                    <img src={appleWatch} alt="" />
                </div>
            </HomeMainWrapper>
            {/* //for review section */}
            <HomeReviewsWrapper>
                <h1>Customer Reviews ({reviewsToDisplay.length})</h1>
                <HomeReviewsContainer>
                    {reviewsToDisplay.map((review) => (
                        <Review key={review.id} review={review} />
                    ))}
                </HomeReviewsContainer>
                <RedirectButton onClick={() => navigate("/reviews")}>
                    See All
                </RedirectButton>
            </HomeReviewsWrapper>
        </div>
    );
};

export default Home;
