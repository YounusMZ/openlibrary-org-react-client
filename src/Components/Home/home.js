import './home.css';
import SearchIcon from './search.png';
import { Outlet, useNavigate } from 'react-router';

function Home() { 
    const navigate = useNavigate();

    const searchBook = () => {
        let searchText = document.getElementById("sideBar-search");
        navigate("/book", {state: {bookName: searchText.value}});
    }

    const onSearchEnterPress = (event) => {
        if (event.key == "Enter"){
            searchBook();
        }
    }

    return (
        <div className="Home">
            <Outlet />
            <div className="sideBar">
                <div className="search">
                    <input type="text"  id="sideBar-search" placeholder="Search" onKeyUp={(event) => onSearchEnterPress(event)}/>
                    <input type="image" id="sideBar-button" src={SearchIcon} onClick={() => { searchBook() }}/>
                </div>
            </div>
        </div>
    )
}

export default Home;