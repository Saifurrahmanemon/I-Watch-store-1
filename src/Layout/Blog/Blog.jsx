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
                <BlogArticleTitle>What is Context API?</BlogArticleTitle>
                <BlogArticleParagraph>
                    While passing through Props from one component to another, a
                    problem(prop-drilling) arises when you have a lot of
                    components.In order to solve this problem, we use Context
                    API. Context API is a way to share data between All
                    components under the Context Provider.Context provides a way
                    to pass data through the component tree without having to
                    pass props down manually at every level
                </BlogArticleParagraph>
            </BlogArticle>
            <BlogArticle>
                <BlogArticleTitle>What is Semantic Tag</BlogArticleTitle>
                <BlogArticleParagraph>
                    Semantic Means something which is understandable by the
                    Human. And semantic tag is a way to make code understandable
                    by the human. Semantic tag Clearly describes it meaning.
                    There are many semantic tags in HTML like article , header,
                    details, main tags etc which can be easily understood by the
                    human.
                </BlogArticleParagraph>
            </BlogArticle>
            <BlogArticle>
                <BlogArticleTitle>
                    What's Difference between inline and inline block elements?
                </BlogArticleTitle>
                <BlogArticleParagraph>
                    <strong>Inline</strong> is The element doesn't use a new
                    line and only occupy just the width it requires. The width
                    or height can not be set manually. <br />{" "}
                    <strong>block</strong> is the element which get the full
                    width available. And use a completely new line <br />{" "}
                    <strong>inline-block</strong> element is more like Inline
                    element where it doest not use a new line however one can
                    set the width and height manually.
                </BlogArticleParagraph>
            </BlogArticle>
        </BlogWrapper>
    );
};

export default Blog;
