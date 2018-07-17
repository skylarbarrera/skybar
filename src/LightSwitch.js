import  React, { Component ,Text,Link} from 'react';
import "./LightSwitch.css"


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

                        <div className='Switch' data-time={this.state.time}>
                        <Toggle onClick={this.handleClick} time={this.state.time} />
                        </div>


        )
    }
};

class Toggle extends Component{
    render() {
        return (
            <div onClick={this.props.onClick} data-time={this.props.time} className="Toggle">
                <Buttoner />
                <ButtonerMoon/>
            </div>
        )
    }
};

class Buttoner extends Component{
    render() {
        return  <div>
            <h4 style={{position: 'absolute', top: 20, left: 20, color: 'white'}}>Press Me</h4>
        <div className="Buttoner"></div>
        </div>
    }
};

class ButtonerMoon extends Component{
    render() {
        return <div className="ButtonerMoon"></div>
    }
};


export default LightSwitch;