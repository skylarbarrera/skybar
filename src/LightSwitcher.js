import React, { Component ,Text,Link} from 'react';
import "./LightSwitcher.css"


class LightSwitcher extends Component{
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
                <Buttoner />
            </div>
        )
    }
};

class Buttoner extends Component{
    render() {
        return <div className="Buttoners"></div>
    }
};

export default LightSwitcher;