import React, { useEffect, useRef, useState } from 'react';
import "./DropdownMenu.css";

import { Link } from 'react-router-dom';

const Dropdown_Menu = () => {
    const dropdownRef = useRef(null);
    const [isActive,setIsActive] = useState(false);
    //Active from inactive ot active
    const onClick = () => setIsActive(!isActive);

    useEffect(() => {
        const pageClickEvent = (e) => {
            //If we click outside
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
              }
          };
          if (isActive) {
            window.addEventListener('click', pageClickEvent);
          }
          
          return () => {
            window.removeEventListener('click', pageClickEvent);
          }
    }, [isActive]);


    return(
        <div className = "menu-container">
            <button onClick={onClick} className="menu-trigger">
                <span>Select...</span>
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <Link className="nav-link" to="/">
                        <li>Home</li>
                    </Link>
                    <Link className="nav-link" to="/About">
                        <li>About</li>
                    </Link>
                    <Link className="nav-link" to="/Twitter">
                        <li>Twitter</li>
                    </Link>
                    <Link className="nav-link" to="/Twitch">
                        <li>Twitch</li>
                    </Link>
                    <Link className="nav-link" to="/Questions">
                        <li>Questions</li>
                    </Link>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Dropdown_Menu;