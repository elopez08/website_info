import React from 'react';
import './Twitter.css';

import Twitter_Icon from './img/Twitter_Icon.png';

const Twitter = () => {
    return (
        <>
            <h1>This is the page for the Twitter link.</h1>
            <img src = {Twitter_Icon} alt="Twitter"/>
            <p>I have Twitter!  Follow me at: </p>
            <p>@MDawnspark</p>
        </>

    )
}

export default Twitter;