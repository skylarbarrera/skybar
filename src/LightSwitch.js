import React, { Component ,Text,Link} from 'react';
import {Header,Navigation,Layout,Grid,Cell} from 'react-mdl'
import "./LightSwitch.css"
import RCard from './Card';


class LightSwitch extends Component{
    constructor(){
        super();

        this.state = {
            time: 'night'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.state.time === 'night') {
            this.setState({time: 'day'});
        } else {
            this.setState({time: 'night'});
        }
    }
    render() {
        return (
            <Layout className='Switch' data-time={this.state.time} >
                <Header  title={<img className={"avatar-img"} src={"https://pbs.twimg.com/profile_images/639081420288208896/pANEqZ4p_400x400.png"}/>} className ='header-transparent'>
                    <Navigation>
                        <a href="./resume">Resume</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <div>
                        <Toggle onClick={this.handleClick} time={this.state.time} />
                        </div>
                    </Navigation>
                </Header>

            </Layout>

        )
    }
};

class Toggle extends Component{
    render() {
        return (
            <div onClick={this.props.onClick} data-time={this.props.time} className="Toggle">
                <Buttoner />
            </div>
        )
    }
};

class Buttoner extends Component{
    render() {
        return <div className="Buttoner"></div>
    }
};

export default LightSwitch;