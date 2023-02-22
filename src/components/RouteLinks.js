import React from 'react';
import { Link } from 'react-router-dom';

const RouteLinks = (props) => {
    return (

        <nav>
            <div>
                <h1>Merable's Home Page</h1>
            </div>
            <div>
                <ul className = "listTabs">
                    <li className="nav-item active" id = "tab1">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/About">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/Twitter">
                            Twitter
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/Twitch">
                            Twitch
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/Questions">
                            Questions
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>

    );
}

export default RouteLinks;