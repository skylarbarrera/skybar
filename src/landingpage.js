import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer,Content, Grid,Cell} from 'react-mdl';
import logo from './logo.svg';
import './App.css';

class LandingPage extends Component {
    render() {
        return (
            <div style = {{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                <Cell col={12}>
                    <img className={"avatar-img"} src={"https://pbs.twimg.com/profile_images/639081420288208896/pANEqZ4p_400x400.png"}/>
                    <div className={"banner-text"}>
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>
                           React Native | React | NodeJS
                        </p>
                    </div>
                </Cell>
            </Grid>

            </div>

        );
    }
}

export default LandingPage;
