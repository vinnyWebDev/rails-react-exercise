import React from 'react'
import { useState, useEffect } from 'react';
import ArticleList from '../View/ArticleList';
import axios from "axios";

const PullArticles = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios.get('http://localhost:3000/articles', {
                headers: { Accept: 'application/json' }
            });
            console.log(response.data)
            setArticles(response.data)
        }
        fetchData();

    }, []); // Or [] if effect doesn't need props or state


    return (
        <div>
            <h2 className='mb-4'>Articles</h2>
            {
                articles.map((item) => {
                    return (
                        <ArticleList title={item.title} body={item.body} id={item.id}> </ArticleList>
                    )
                })
            }
        </div>
    )
}

export default PullArticles
