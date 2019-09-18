import React, { Component } from 'react';
import './App.css';

class AboutMe extends Component {
    render() {
        return (
            <div style = {{display: 'flex', flexDirection: 'row'}}>
            <div style ={{width: '60%'}}>
                <h1 style ={{color: 'white'}}> About Me</h1>
                <p style ={{color: 'white'}}> Hello! I'm Skylar, a software engineer from Northern Virginia who enjoys finding problems and solving them through the use of technology. I develop both websites and mobile applications that provide intuitive and simple user interfaces using the latest technologies. </p>
                <p style ={{color: 'white'}}> I am a recent graduate from William & Mary looking for exciting opportunities to learn and work on solving large scale problems!</p>
                <h2 style ={{color: 'white'}}>Here are a few technologies that I've been working with recently:</h2>
                <ul style ={{color: 'white', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(140px,200px))'}}>
                <li> JavaScript (ES6+)</li>
                <li> HTML & CSS</li>
                <li> React</li>
                <li> React Native</li>
                <li> Firebase</li>
                </ul>

            </div>
            <div style ={{width: '40%'}}>
            <img  src = {'https://pbs.twimg.com/profile_images/639081420288208896/pANEqZ4p_400x400.png'}/>


            </div>
            </div>

        );
    }
}

export default AboutMe;
