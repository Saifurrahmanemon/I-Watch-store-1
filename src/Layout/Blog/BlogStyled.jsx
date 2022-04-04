import styled from "styled-components";
const BlogWrapper = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 1rem;
`;

const BlogTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 1rem;
    text-align: center;
`;
const BlogArticle = styled.article`
    margin: 0 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 20px;
`;
const BlogArticleTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 0 1rem;
`;
const BlogArticleParagraph = styled.p`
    font-size: 1rem;
    margin: 0 0 1rem;
`;
export {
    BlogWrapper,
    BlogTitle,
    BlogArticle,
    BlogArticleTitle,
    BlogArticleParagraph,
};
