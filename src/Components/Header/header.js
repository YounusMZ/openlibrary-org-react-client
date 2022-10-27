import './header.css'
import Search from './Search/Search.js'
import Home from './Home/home.js'
import React from 'react'

function NavBar(props) {
    return (
        <div className="navbar">
            <button className="navButton" onClick={props.homeClick}>Home</button>
            <button className="navButton" onClick={props.searchClick}>Search</button>
            <button className="navButton" onClick={props.aboutClick}>About</button>
        </div>
    )
}

class Body extends React.Component {
    constructor(props){
        super(props)
        this.siteName = "OpenLibrary"

        this.state = {
            "selected" : "home",
            "search" : false,
        }
        this.homeClicked.bind(this)
        this.searchClicked.bind(this)
        this.aboutClicked.bind(this)
    }

    homeClicked = () => {
        this.setState({
            "selected": "home",
        })
        console.log("home clicked")
    }
    
    searchClicked = () => {
        this.setState({
            "search": true,
        })
        console.log("search clicked")
    }

    aboutClicked = () => {
        this.setState({
            "selected": "about",
        })
        console.log("about clicked")
    }

    render(){
        return (
            <div className="App-body">
                <div className="App-header">
                    <h1 id="heading">{this.siteName}</h1>
                    <NavBar homeClick={this.homeClicked} searchClick={this.searchClicked} aboutClick={this.aboutClicked}/>
                </div>
                <div className="body">
                    {this.state.search ? <Search /> : null}
                    {this.state.selected === "home" ? <Home /> : <></> }
                    
                </div>
            </div>
        )
    }
}

export default Body