import styled from "styled-components";
const ChartWrapper = styled.div`
    margin-top: 2rem;
    max-width: 1200px;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    grid-gap: 1rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: center;
        align-content: center;
        justify-items: center;
    }
`;

export { ChartWrapper };
