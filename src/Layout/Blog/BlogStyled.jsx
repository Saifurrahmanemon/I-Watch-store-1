import styled from "styled-components";

const BlogWrapper = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 1rem;
`;

const BlogArticle = styled.article`
    margin: 1rem 3rem;
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
    color: #4c4c4c;
`;
export { BlogWrapper, BlogArticle, BlogArticleTitle, BlogArticleParagraph };
