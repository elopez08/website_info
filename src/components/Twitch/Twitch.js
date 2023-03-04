import React from 'react';
import './Twitch.css';

import Twitch_Icon_2 from './img/Twitch_Icon.png';

const Twitch = () => {
    return (
        <div id = "twitchInfo">
            <div id = "header">
                <h1>This is a page for the Twitch.</h1>
            </div>
            <img src = {Twitch_Icon_2} alt = 'TWITCH'/>
            <div id = "para">
                <div>
                    <p>Follow me on Twitch at:</p>
                </div>
                <div>
                    <a href = "https://www.twitch.tv/merable08">https://www.twitch.tv/merable08</a>
                </div>
                <br />
                <div>
                    <p>
                        The content I do is mostly from League of Legends and Final Fantasy 14.
                        On League, I am on the LAN server.  I main as Lulu, but I also play other supports to help out the team!  Current profile can be found at:
                        https://www.leagueofgraphs.com/summoner/lan/Merable
                        <br />
                        <br />
                        Final Fantasy 14 became one of my favorite MMORPG games I've played.  Thanks to a few friends, *cough* Tik! *cough*, as well as Carbot, I finally played the game back at August 2020.  I have beaten Endwalker, but despite that, there's more stuff to do.  I am currently doing other content I didn't finish or unlocking stuff such as the class jobs.  My main thing I do is PvP in Crystalline Conflict.
                        <br />
                        <br />
                        Server:  Mateus
                        <br />
                        <br />
                        I do end up streaming other games as well.  Fridays are usually the times I play other games.  Whether is getting through something hard like Cuphead Perfect runs or playing casual with friends, this is probably the day that is more lax than the others!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Twitch;