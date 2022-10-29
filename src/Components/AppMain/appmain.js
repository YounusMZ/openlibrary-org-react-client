import './appmain.css'
import Home from '../Home/home.js'
import React from 'react'

function NavBar(props) {
    return (
        <div className="navbar">
            <button className="navButton" onClick={props.homeClick}>Home</button>
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
    }

    homeClicked = () => {
        this.setState({
            "selected": "home",
        })
        console.log("home clicked")
    }
    


    render(){
        return (
            <div className="App-body">
                <div className="App-header">
                    <h1 id="heading">{this.siteName}</h1>
                    <NavBar homeClick={this.homeClicked} aboutClick={this.aboutClicked}/>
                </div>
                <div>
                    <Home />
                </div>
            </div>
        )
    }
}

export default Body