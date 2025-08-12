import Trending from '../TrendingBooks/trendingbooks.js'
import './home.css'
import { useState } from 'react'
import Book from '../Book/book.js'
import SearchIcon from './search.png'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Home() { 
    const navigate = useNavigate();

    const searchBook = () => {
        let searchText = document.getElementById("sideBar-search");
        navigate("/book", {state : {bookName : searchText.value}})
    }

    const onSearchClick = () => {
        searchBook()
    }

    const onSearchEnterPress = (event) => {
        if (event.key == "Enter"){
            searchBook()
        }
    }

    return (
        <div className="Home">
            <Outlet />
            <div className="sideBar">
                <div className="search">
                    <input type="text"  id="sideBar-search" placeholder="Search" onKeyUp={(event) => onSearchEnterPress(event)}/>
                    <input type="image" id="sideBar-button" src={SearchIcon} onClick={onSearchClick}/>
                </div>
            </div>
        </div>
    )
}

export default Home