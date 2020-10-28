import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import About from "./components/About/index";
import Portfolio from "./components/Portfolio/index";
import Resume from "./components/Resume/index";
import Contact from "./components/Contact/index";

function App() {

    return ( <
        BrowserRouter basename = "/resume" >
        <
        Switch >
        <
        Route path = "/"
        component = { About }
        exact = { true }
        /> <
        Route path = "/resumePage"
        component = { Resume }
        exact = { true }
        /> <
        Route path = "/contact"
        component = { Contact }
        exact = { true }
        /> <
        Route path = "/portfolio"
        component = { Portfolio }
        exact / >
        <
        /Switch> < /
        BrowserRouter >
    );
}

export default App;