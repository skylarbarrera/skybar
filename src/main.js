import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Projects from "./projects";
import Resume from "./resume";
import navBar from "./navBar"


const NavRouter = () => (
    <Switch>
        <Route exact path = "/" component={LandingPage} />
        <Route  path = "/aboutme" component={AboutMe}/>
        <Route path = "/projects" component={Projects}/>
        <Route path = "/resume" component ={Resume}/>
    </Switch>
)

export default NavRouter