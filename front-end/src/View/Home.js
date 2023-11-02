import React from 'react'
import PullArticles from '../Components/PullArticles';

const Home = () => {
    return (
        <div>
            <h1>Front End Prototype</h1>
            <p>
                Clicking on an article brings me to that articles unique page. URL Params enables this.<br></br>
                <br></br>
                Comments should be visible on this page.<br></br>
                CRUD Functionality woukd be good but not top priority right now.<br></br><br></br>
                FIX: How to pull and display comments?</p>
            <PullArticles></PullArticles>
        </div>
    )
}

export default Home
