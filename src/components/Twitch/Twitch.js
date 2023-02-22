import React from 'react';
import './Twitch.css';

import Twitch_Icon_2 from './img/Twitch_Icon_2.png';

const Twitch = () => {
    return (
        <>
            <h1>This is a page for the Twitch.</h1>
            <img src = {Twitch_Icon_2} alt = 'TWITCH'/>
            <p>Follow me on Twitch at:</p>
            <p>https://www.twitch.tv/merable08</p>
        </>
    )
}

export default Twitch;