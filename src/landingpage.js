import React, { Component ,Text} from 'react';

import './landingpage.css';
import RCard from './Card';
import LightSwitcher from "./LightSwitcher";

var extraskills = {/*
<i className="devicon-html5-plain"></i>
< i
className = "devicon-css3-plain" > < /i>
<i className="devicon-git-plain"></i>
< i
className = "devicon-sourcetree-plain" > < /i>
<i className="devicon-php-plain"></i>
*/}

class LandingPage extends Component {
    render() {
        return (
            <div>

                <LightSwitcher/>
                <div className={'cover-container'}>
                    <div className={'cover-text-content'}>
                        <h1  className={'cover-title'}>Skylar Barrera</h1>
                        <h2 className={'cover-text'}> Computer Science Student @ William & Mary</h2>
                        <div className={'skills-list'}>


                            <i className="devicon-python-plain"></i>
                            <i className="devicon-c-line"></i>
                            <i className="devicon-cplusplus-line"></i>
                            <i className="devicon-javascript-plain"></i>
                            <i className="devicon-nodejs-plain"></i>
                            <i className={"devicon-react-original"}></i>
                            <i className={'icon ion-md-add'} style={{fontSize: '2em'}}></i>



                        </div>
                    </div>
                <div className={ 'cover-image-content'}>
                    <img className={'northern', 'animation-shimerring'} src={'https://isora.me/hire-me/img/etc/northern_lights.png'}/>

                </div>

            </div>
            <div style={{display: 'flex', flexDirection: 'row', position: 'relative'}}>
                <div style={{width: '40%', backgroundColor: 'transparent'}}>
                    <h2 className={'project-header'}>FEATURED PROJECTS</h2>
                    <h3 className={'project-header'}> OTHER PROJECTS </h3>

                </div>
            <div className={'project-gallery-container'}>
                <RCard/>
                <RCard/>
                <RCard/>
                <RCard/>
                <RCard/>
            </div>

        </div>
            </div>



        );
    }
}

export default LandingPage;
