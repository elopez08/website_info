import { useEffect } from 'react';

import './App.css';

import Header from './components/Header/Header.js';
import RouterPath from './components/RouterPath.js';
import IconsSite from './components/Icons/Icons.js';
import Footer from './components/Footer/Footer.js';

const App = () => {

    useEffect(() => {

    }, []);


    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            <div className = "start">
                <RouterPath />
            </div>
            <IconsSite />
            <Footer />
        </div>
    );
}

export default App;