import React from 'react';
import './Twitter.css';

import Twitter_Icon from './img/Twitter_Icon.png';

const Twitter = () => {
    return (
        <div id = "twitterInfo">
            <div id ="header">
                <h1>This is the page for the Twitter link.</h1>
            </div>
            <img src = {Twitter_Icon} alt="Twitter"/>
            <div id = "para">
                <p>I have Twitter!  Follow me at: </p>
                <a href = "https://twitter.com/MDawnspark">@MDawnspark</a>
            </div>
        </div>
    )
}

export default Twitter;