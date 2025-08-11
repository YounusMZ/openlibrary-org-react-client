import Trending from '../TrendingBooks/trendingbooks.js'
import './home.css'
import { useState } from 'react'
import Book from '../Book/book.js'
import SearchIcon from './search.png'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Home() { 
    const navigate = useNavigate();

    const onBookSearchClick = () => {
        let searchText = document.getElementById("sideBar-search");
        navigate("/book", {state : {bookName : searchText.value}})
    }


    return (
        <div className="Home">
            <Outlet />
            <div className="sideBar">
                <div className="search">
                    <input type="text"  id="sideBar-search" placeholder="Search" />
                    <input type="image" id="sideBar-button" src={SearchIcon} onClick={onBookSearchClick}/>
                </div>
                <h2 id="sideBar-heading">Trending Books</h2>
            </div>
        </div>
    )
}

export default Home