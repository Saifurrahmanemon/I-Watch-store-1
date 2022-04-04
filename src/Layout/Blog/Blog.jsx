import React from "react";
import { Title } from "../Review/ReviewsStyled";
import {
    BlogArticle,
    BlogArticleParagraph,
    BlogArticleTitle,
    BlogWrapper,
} from "./BlogStyled";

const Blog = () => {
    return (
        <BlogWrapper>
            <Title>Blog</Title>
            <BlogArticle>
                <BlogArticleTitle>What is Context API</BlogArticleTitle>
                <BlogArticleParagraph>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse fugiat officiis debitis voluptatum fugit, quod commodi,
                    voluptas exercitationem dolores nemo omnis odit, neque eius
                    perspiciatis suscipit? Sunt eum dignissimos exercitationem.
                </BlogArticleParagraph>
            </BlogArticle>
            <BlogArticle>
                <BlogArticleTitle>What is Context API</BlogArticleTitle>
                <BlogArticleParagraph>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse fugiat officiis debitis voluptatum fugit, quod commodi,
                    voluptas exercitationem dolores nemo omnis odit, neque eius
                    perspiciatis suscipit? Sunt eum dignissimos exercitationem.
                </BlogArticleParagraph>
            </BlogArticle>
            <BlogArticle>
                <BlogArticleTitle>What is Context API</BlogArticleTitle>
                <BlogArticleParagraph>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse fugiat officiis debitis voluptatum fugit, quod commodi,
                    voluptas exercitationem dolores nemo omnis odit, neque eius
                    perspiciatis suscipit? Sunt eum dignissimos exercitationem.
                </BlogArticleParagraph>
            </BlogArticle>
        </BlogWrapper>
    );
};

export default Blog;
