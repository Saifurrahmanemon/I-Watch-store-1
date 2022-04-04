import styled from "styled-components";

const HomeMainWrapper = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const TextWrapper = styled.div`
    margin: 4rem;
    text-align: left;
`;
const TextTitle = styled.div`
    text-align: left;
    font-weight: bolder;
    font-size: 3rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const TextTitleTwo = styled(TextTitle)`
    color: grey;
`;

const TextBody = styled(TextTitle)`
    font-size: 1rem;
    font-weight: normal;
    margin-top: 1rem;
    color: #454545;
`;
const TextButton = styled.button`
    background-color: #d0d0d0;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    color: #454545;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem;
    margin-top: 1rem;
    width: 10rem;
    cursor: pointer;
    &:hover {
        background-color: #454545;
        color: #f5f5f5;
        transition: 0.5s;
    }
`;
const HomeReviewsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        margin-top: 0;
    }
`;
const HomeReviewsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    gap: 1rem;
    @media (max-width: 768px) {
        margin-top: 0;
        flex-direction: column;
    }
`;
const RedirectButton = styled(TextButton)`
    background-color: #d8d8d8;
    width: 18rem;
    margin-top: 1.2rem;
`;
export {
    HomeMainWrapper,
    TextWrapper,
    TextTitle,
    TextTitleTwo,
    TextBody,
    TextButton,
    HomeReviewsWrapper,
    HomeReviewsContainer,
    RedirectButton,
};
