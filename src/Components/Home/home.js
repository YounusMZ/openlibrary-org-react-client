import Trending from '../TrendingBooks/trendingbooks.js'
import './home.css'
import { useState } from 'react'
import Book from '../Book/book.js'


function Home() { 
    const [book, setBook] = useState("trending");
    const [bookDescription, setBookDescription] = useState();

    const onBookSearchClick = () => {
        let searchText = document.getElementById("sideBar-search");
        setBook(searchText.value)
    }

    const onBookInfoCLick = (name, image) => {
        let bookInfoReturn =
            <div>
                <img alt={name} id="header-img" src={image}></img>
                <p id="header-para">{name}</p>
            </div>;
        setBookDescription(bookInfoReturn);
    }

    return (
        <div className="Home">
            {book === "trending" ? <Trending bookInfoClick={onBookInfoCLick} /> : <Book currentBook={book} bookInfoClick={onBookInfoCLick} />}
            <div className="sideBar">
                <div className="search">
                    <input type="text" id="sideBar-search" placeholder="Search Books" />
                    <button id="sideBar-button" onClick={onBookSearchClick}>Search!</button>
                </div>
                <h2 className="sideBar-heading" onClick={() => { setBook("trending") }} >Trending Books</h2>
                {bookDescription}
            </div>
        </div>
    )
}

export default Home