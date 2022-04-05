import styled from "styled-components";
import CustomLink from "../../Hooks/CustomLink";

const HeaderWrapper = styled.div`
    text-align: center;
    text-decoration: none;
    margin: 1rem;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 20px;
`;
const LinkStyle = styled(CustomLink)`
    text-decoration: none;
    color: black;

    font-weight: bold;
`;

export { HeaderWrapper, LinkStyle };
