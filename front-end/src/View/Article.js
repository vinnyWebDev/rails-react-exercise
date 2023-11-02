import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ArticleList from '../View/ArticleList';
import axios from "axios";

const Article = () => {

    const params = useParams();
    //use this to pull relevant article from the api
    const articleID = params.articleID;

    const [article, setArticle] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios.get(`http://localhost:3000/articles/${articleID}`, {
                headers: { Accept: 'application/json' }
            });
            setArticle(response.data)
            console.log(response.data)
        }
        fetchData();

    }, []); // Or [] if effect doesn't need props or state

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <h2>Comments</h2>

            {
                //we must first check if "comments" exists, otherwise we get an error
                article.comments?.map((item) => {
                    return (<>
                        <h3>{item.commenter}</h3>
                        <p>{item.body}</p>
                    </>
                    )
                })
            }

        </div>
    )
}

export default Article
