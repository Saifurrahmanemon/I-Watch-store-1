import styled from "styled-components";

const HomeWrapper = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const TextWrapper = styled.div`
    text-align: center;
    margin: 4rem;
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
export {
    HomeWrapper,
    TextWrapper,
    TextTitle,
    TextTitleTwo,
    TextBody,
    TextButton,
};
