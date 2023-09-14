import Trending from '../TrendingBooks/trendingbooks.js'
import './home.css'
import { useState } from 'react'
import Book from '../Book/book.js'


function Home() { 
    const [book, setBook] = useState("trending");

    const onBookSearchClick = () => {
        let searchText = document.getElementById("sideBar-search");
        setBook(searchText.value);
    }


    return (
        <div className="Home">
            {book === "trending" ? <Trending /> : <Book currentBook={book}/>}
            <div className="sideBar">
                <div className="search">
                    <input type="text" id="sideBar-search" placeholder="Search Books" />
                    <button id="sideBar-button" onClick={onBookSearchClick}>Search!</button>
                </div>
                <h2 id="sideBar-heading" onClick={() => { setBook("trending") }} >Trending Books</h2>
            </div>
        </div>
    )
}

export default Home