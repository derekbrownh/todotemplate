import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { App} from "./App";
import {SignIn, SignUp} from "./Authentication"
import {Edit} from './EditScreen'
import { BrowserRouter, Route} from "react-router-dom"
import {Venmo} from './Venmo'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path ="/" component ={SignIn}/>
            <Route path = "/signup" component = {SignUp}/>
            <Route path = "/app" component = {App}/>
            <Route path = '/edit' component = {Edit} />
            <Route path = '/venmo' component = {Venmo} />
        </div>
    </BrowserRouter>, 
    document.getElementById("root"));

serviceWorker.unregister();