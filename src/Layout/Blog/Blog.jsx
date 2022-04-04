import React from "react";
import {
    BlogArticle,
    BlogArticleParagraph,
    BlogArticleTitle,
    BlogTitle,
    BlogWrapper,
} from "./BlogStyled";

const Blog = () => {
    return (
        <BlogWrapper>
            <BlogTitle>blog</BlogTitle>
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
