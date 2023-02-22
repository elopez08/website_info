import React from 'react';
//import RouteLinks from '../RouteLinks';
import { Link } from 'react-router-dom';



import './Home.css'

const Home = () => {
    return (
        <div id="menuBox">
            <h1>
                Home Page.
            </h1>
            <br />
            <p>Welcome to Merable's First Site!  Currently, this is under construction, but I hope this suffices in guiding you through my basic information!  Please, click on the links either above or below to be guided on the page info.</p>
            <ul className = "listTabs" id = "homeList">
                <li className="nav-item active" id = "homeTabs">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item active" id = "homeTabs">
                    <Link className="nav-link" to="/About">
                        About
                    </Link>
                </li>
                <li className="nav-item active" id = "homeTabs">
                    <Link className="nav-link" to="/Twitter">
                        Twitter
                    </Link>
                </li>
                <li className="nav-item active" id = "homeTabs">
                    <Link className="nav-link" to="/Twitch">
                        Twitch
                    </Link>
                </li>
                <li className="nav-item active" id = "homeTabs">
                    <Link className="nav-link" to="/Questions">
                        Questions
                    </Link>
                </li>
            </ul>
        </div>

    )
}

export default Home;