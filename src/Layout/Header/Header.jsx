import React from "react";
import styled from "styled-components";
import CustomLink from "../../Hooks/CustomLink";

const HeaderWrapper = styled.div`
    text-align: center;
    text-decoration: none;
    margin: 1rem;
    display: flex;
    justify-content: center;
`;
const LinkStyle = styled(CustomLink)`
    text-decoration: none;
    color: black;
    margin-right: 20px;
    font-weight: bold;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <LinkStyle to="/home">Home</LinkStyle>
            <LinkStyle to="/reviews">Reviews</LinkStyle>
            <LinkStyle to="/dashboard">Dashboard</LinkStyle>
            <LinkStyle to="/blog">Blog</LinkStyle>
            <LinkStyle to="/about">About</LinkStyle>
        </HeaderWrapper>
    );
};

export default Header;
