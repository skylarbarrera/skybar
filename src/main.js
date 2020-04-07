import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Projects from "./projects";
import Resume from "./resume";
import Hobbies from "./hobbies";
import navBar from "./navBar"
import LightSwitch from "./LightSwitch";
import LightSwitcher from "./LightSwitcher";

//<Route path = "/hobbies" component ={Hobbies}/>

const NavRouter = () => (
    <Switch>
        <Route exact path = "/" component={LandingPage} />
        <Route  path = "/aboutme" component={AboutMe}/>
        <Route path = "/projects" component={Projects}/>
        <Route path = "/resume" component ={Resume}/>
        
    
    </Switch>
)

export default NavRouter