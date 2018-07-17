import React, { Component ,Text,Link} from 'react';
import "./LightSwitcher.css"


class LightSwitcher extends Component{
    constructor(){
        super();

        this.state = {
            time: 'Moon'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.state.time === 'Moon') {
            this.setState({time: 'Sun'});
        } else {
            this.setState({time: 'Moon'});
        }
    }
    render() {
        return (

            <div className='Switcher' data-time={this.state.time}>
                <Toggle onClick={this.handleClick} time={this.state.time} />
            </div>


        )
    }
};

class Toggle extends Component{
    render() {
        return (
            <div onClick={this.props.onClick} data-time={this.props.time} className="Toggler">
                <h4 className={'DaySun-Press'}>Press the {this.props.time}></h4>
                <Buttoners/>
                <ButtonersMoon/>

            </div>
        )
    }
};

class Buttoners extends Component{
    render() {
        return <div>

            <div className="Buttoners"></div>
        </div>
    }
};

class ButtonersMoon extends Component{
    render() {
        return <div className="ButtonersMoon"></div>
    }
};


export default LightSwitcher;