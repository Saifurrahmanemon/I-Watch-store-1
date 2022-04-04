import React from "react";
import { useNavigate } from "react-router-dom";
import {
    NotFoundButton,
    NotFoundText,
    NotFoundTitle,
    NotFoundWrapper,
} from "./NotFoundStyled";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <NotFoundWrapper>
            <NotFoundTitle>Oops!</NotFoundTitle>
            <h4>404 Page not found</h4>
            <NotFoundText>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
            </NotFoundText>
            <NotFoundButton onClick={() => navigate("/home")}>
                GO TO HOME
            </NotFoundButton>
        </NotFoundWrapper>
    );
};

export default NotFound;
