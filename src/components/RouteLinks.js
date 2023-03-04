import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './img/ICON_Merable.jpg';

import DropdownMenu from './Dropdown_Menu/DropdownMenu.js';

const RouteLinks = (props) => {
    return (
        <nav id="head_menu">
            <div id="header_nav">
                <Link className="nav-link" to="/">
                    <div id="logo">
                        <img src = {Logo} alt= "logo" id = "logo" />
                    </div>
                </Link>
                <div id="nav_bar">
                    <div className="link-bars">
                        <ul className = "listTabs">
                            <Link className="nav-link" to="/">
                                <li id = "tab1">
                                        Home
                                </li>
                            </Link>
                            <Link className="nav-link" to="/About">
                                <li id = "tab1">
                                        About
                                </li>
                            </Link>
                            <Link className="nav-link" to="/Twitter">
                                <li id = "tab1">
                                        Twitter
                                </li>
                            </Link>
                            <Link className="nav-link" to="/Twitch">
                                <li id = "tab1">
                                        Twitch
                                </li>
                            </Link>
                            <Link className="nav-link" to="/Questions">
                                <li id = "tab1">
                                        Questions
                                </li>
                            </Link>
                        </ul>
                    </div>


                    {/* This is incorrect.  We may need one more component, which is making a page for the dropdown menu */}
                    <div className="container">
                        <DropdownMenu />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default RouteLinks;