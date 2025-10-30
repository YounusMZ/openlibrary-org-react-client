import './appmain.css';
import Home from '../Home/home.js';
import React from 'react';
import { Link } from 'react-router';

class AppMain extends React.Component {
    constructor(props){
        super(props);
        this.siteName = "OpenLibrary";
    }

  
    render(){
        return (
            <div className="App-body">
                <div className="App-header">
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <h2 id="app-heading">{this.siteName}</h2>
                    </Link>
                </div>
                <div>
                    <Home />
                </div>
            </div>
        )
    }
}

export default AppMain;