import './appmain.css'
import Home from '../Home/home.js'
import React from 'react'


class Body extends React.Component {
    constructor(props){
        super(props)
        this.siteName = "OpenLibrary";
    }

  
    render(){
        return (
            <div className="App-body">
                <div className="App-header">
                    <h1 id="heading">{this.siteName}</h1>
                </div>
                <div>
                    <Home />
                </div>
            </div>
        )
    }
}

export default Body