import React from "react";
import { HeaderWrapper, LinkStyle } from "./HeaderStyled";
// LinkStyle uses CustomLink hook which is defined in src\Hooks\CustomLink.jsx
const Header = () => {
    return (
        <HeaderWrapper>
            <LinkStyle to="/home">Home</LinkStyle>
            <LinkStyle to="/reviews">Reviews</LinkStyle>
            <LinkStyle to="/dashboard">Dashboard</LinkStyle>
            <LinkStyle to="/blog">Blog</LinkStyle>
        </HeaderWrapper>
    );
};

export default Header;
