import React from 'react';
import RouteLinks from '../RouteLinks';

//Stylesheet
import './Header.css';

const Header = () => {
    return (
        <div>
            <RouteLinks className = "routeMenu" />
        </div>
    );
        
}

export default Header;