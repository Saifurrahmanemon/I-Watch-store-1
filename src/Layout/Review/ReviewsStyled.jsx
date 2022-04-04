import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #3a3a3a;
    margin: 1rem 1rem;
    @media (min-width: 768px) {
        font-size: 2em;
    }
`;
const ReviewsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export { Title, ReviewsWrapper };
