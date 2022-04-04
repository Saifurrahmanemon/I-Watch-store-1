import styled from "styled-components";
const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    height: 100vh;
    color: #333;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`;
const NotFoundTitle = styled.h1`
    font-size: 6rem;
    margin-bottom: 1rem;
    &:hover {
        color: #ff0404cd;
    }
`;
const NotFoundText = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
`;
const NotFoundButton = styled.button`
    font-size: 1rem;
    margin-top: 1rem;
    padding: 0.6rem 2rem;
    border: none;
    background-color: #696868cd;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    &:hover {
        background-color: #32429fcd;
    }
`;

export { NotFoundWrapper, NotFoundTitle, NotFoundText, NotFoundButton };
