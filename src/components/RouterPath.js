import React from 'react';
import './RouterPath.css';
import { Routes as Switch, Route } from 'react-router-dom';

//IMporting Home Component
import Home from './Home/Home.js';
//Importing About Component
import About from "./About/About.js";
//Importing About Component
import Twitter from "./Twitter/Twitter.js";
//Importing About Component
import Twitch from "./Twitch/Twitch.js";
//Importing About Component
import Questions from "./Questions/Questions.js";

const RoutePath = () => {

        return (
            <>
                    <Switch>
                        <Route exact path='/' element={<Home/>} />
                        <Route exact path='/About' element={<About/>} />
                        <Route exact path='/Twitter' element={<Twitter/>} />
                        <Route exact path='/Twitch' element={<Twitch/>} />
                        <Route exact path='/Questions' element={<Questions/>} />
                    </Switch>
            </>

        );

}

export default RoutePath;