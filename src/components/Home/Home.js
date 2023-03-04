import React from 'react';
//import RouteLinks from '../RouteLinks';
import { Link } from 'react-router-dom';



import './Home.css'

const Home = () => {
    return (
        <div id="menuBox">
            <div id= "homeTitle">
                <h1>
                    Merable's Information.
                </h1>
            </div>
            <br />
            <div id = "homePara">
                <p>Welcome to Merable's First Site!  Currently, this is under construction, but I hope this suffices in guiding you through my basic information!  Please, click on the links either above or below to be guided on the page info.</p>
            </div>
            <div id = "homeList">
                <ul className = "listTabs" id = "homeList">
                    <Link className="nav-link" to="/">
                        <li className="nav-item active" id = "homeTabs">
                                Home
                        </li>
                    </Link>
                    <Link className="nav-link" to="/About">
                        <li className="nav-item active" id = "homeTabs">
                                About
                        </li>
                    </Link>
                    <Link className="nav-link" to="/Twitter">
                        <li className="nav-item active" id = "homeTabs">
                                Twitter
                        </li>
                    </Link>
                    <Link className="nav-link" to="/Twitch">
                        <li className="nav-item active" id = "homeTabs">
                                Twitch
                        </li>
                    </Link>
                    <Link className="nav-link" to="/Questions">
                        <li className="nav-item active" id = "homeTabs">
                                Questions
                        </li>
                    </Link>
                </ul>
            </div>
        </div>

    )
}

export default Home;