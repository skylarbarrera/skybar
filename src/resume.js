import React, { Component } from 'react';
import './App.css';
import LightSwitch from "./LightSwitch";
import {Header,Navigation,Layout,Grid,Cell} from 'react-mdl';
import RCard from './Card'

class Resume extends Component {
    render() {
        return (
            <div style={{overflow: 'hidden'}}>
            <LightSwitch/>
            <div style = {{ width: '80%', margin: 'auto'}}>
                <Grid >
                    <Cell col={12}>
                        <div className={"banner-text"}>
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>
                                React Native | React | NodeJS
                            </p>
                        </div>
                    </Cell>

                    
                    <Cell col={4}>
                        <RCard/>
                    </Cell>
                    <Cell col={4}>
                        <RCard/>
                    </Cell>
                    <Cell col={4}>
                        <RCard/>
                    </Cell>

                </Grid>

            </div>
            </div>

        );
    }
}

export default Resume;
