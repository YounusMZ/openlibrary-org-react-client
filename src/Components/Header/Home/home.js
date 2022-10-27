import Trending from './trendingbooks.js'
import './home.css'
import { useState, useEffect } from 'react'


function Home() {
    const [book, setBook] = useState("trending")

    onBookClick = (bookUrl) => {
        setBook(bookUrl)
    }

    return (
        <div className="Home">
            <div className="sideBar">
                <h2>Trending Books</h2>
            </div>
            {book === "trending" ? <Trending bookclicked={onBookClick} /> : null}
        </div>
    )
}

export default Home