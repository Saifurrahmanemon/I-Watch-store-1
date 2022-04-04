import React from "react";
import appleWatch from "../../images/iwatch.jpg";
import {
    HomeWrapper,
    TextBody,
    TextButton,
    TextTitle,
    TextTitleTwo,
    TextWrapper,
} from "./Homestyled";

const Home = () => {
    return (
        <HomeWrapper>
            <TextWrapper>
                <TextTitle>Your next apple watch</TextTitle>
                <TextTitleTwo>Unleash the Future</TextTitleTwo>
                <TextBody>
                    Apple Watch is a wearable smartwatch that allows you to
                    accomplish a variety of tasks, including making phone calls,
                    sending text messages and reading email.
                </TextBody>
                <TextButton>Watch Live</TextButton>
            </TextWrapper>
            <div>
                <img src={appleWatch} alt="" />
            </div>
        </HomeWrapper>

        // for review section
    );
};

export default Home;
