import styled from "styled-components";

const ReviewCard = styled.div`
    width: 250px;
    height: 200px;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    background-color: #d9d9d9;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
    &:hover {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    }
`;
const CardImage = styled.img`
    width: 50px;
    height: 50px;
    background-size: cover;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.5);
`;

const CardTitle = styled.p`
    font-size: 1em;
    font-weight: bold;
    margin: 0.5rem 0;
`;
const CardText = styled.p`
    font-size: 0.8em;
    margin: 0.5rem 0;
    color: #4f4f4f;
`;
const CardImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
`;
const CardRatings = styled.p`
    font-size: 0.8em;
    margin: 0.5rem 0;
    font-weight: bold;
`;
export {
    ReviewCard,
    CardImage,
    CardTitle,
    CardText,
    CardImageContainer,
    CardRatings,
};
