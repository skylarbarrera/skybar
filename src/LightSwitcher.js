import React, { Component ,Text,Link} from 'react';
import "./LightSwitcher.css";
import {css, StyleSheet} from 'aphrodite';

var styles = ({
    Switcher :{
    position: 'absolute',
    overflow: 'no-content',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    background: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    ':before':{
        overflow: 'no-display',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top:'0',
        left:'0',
        height: '1000vh',
        width: '100vw',
        content:'',
        background: 'linear-gradient(to bottom, #111c2b 0%, #353782 12%, #ff6687 28%, #ffb959 45%, #87e0fd 72%, #53cbf1 87%, #05abe0 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr='#111c2b', endColorstr='#05abe0',GradientType=0 )',
        /* IE6-9 */
        transition: 'top 2.5s ease'

    }

}

}
.Switcher[data-time="Sun"]::before {
    top: -800vh;
}
.Switcher .Toggler {
    top: 20px;
    right: 20px;
    z-index: 1;
    margin: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.0);
    width: 30px;
    height: 75px;
    border: 0px solid rgba(252, 250, 250, 0.125);
    background: rgba(252, 250, 250, 0.00);
    position: absolute;
    padding: 10px;
    border-radius: 200px;
}
.Switcher .Toggler[data-time='Sun'] .Buttoners {
    opacity: 1;
    box-shadow: 0 0 10px 10px #FB5607;
    border: 1px solid #fb5607 !important;
    top: 10px;
}
.Switcher .Toggler[data-time='Sun'] .Buttoners::before {
    opacity: 1;
}
.Switcher .Toggler .Buttoners {
    height: 40px;
    width: 40px;
    overflow: hidden;
    background: yellow;
    border-radius: 40px;
    position: absolute;
    top: 150vh;
    left:0px;
    transition: opacity 2.5s ease, box-shadow 2.5s ease, border 2.5s ease, top 2.5s ease;
    background: #EDDDD4;
    /* Old browsers */
    background: linear-gradient(135deg, #edddd4 0%, #fcfafa 50%, #edddd4 51%, #fcfafa 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=1 );
    /* IE6-9 fallback on horizontal gradient */
    box-shadow: 0 0 25px 5px #EDDDD4;
    border: 5px solid rgba(237, 221, 212, 0.5);
    opacity: 0;
}
.Switcher .Toggler .Buttoners::before {
    content: '';
    height: 40px;
    width: 40px;
    background: red;
    top: 0px;
    left: 0px;
    position: absolute;
    border-radius: 40px;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#fefcea+0,f1da36+100;Gold+3D */
    background: #FFFFFF;
    /* Old browsers */
    background: radial-gradient(ellipse at center, white 0%, #ffbe0b 50%, #fb5607 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea', endColorstr='#f1da36',GradientType=1 );
    /* IE6-9 fallback on horizontal gradient */
    transition: opacity 2.5s ease;
    opacity: 0;
}










.Switcher .Toggler[data-time='Sun'] .ButtonersMoon {
    opacity: 0;
    top: 100vh;
}
.Switcher .Toggler[data-time='Sun'] .ButtonersMoon::before {
    opacity: 1;
}
.Switcher .Toggler .ButtonersMoon {
    height: 40px;
    width: 40px;
    overflow: hidden;
    background: yellow;
    border-radius: 40px;
    position: absolute;
    top: 0px;
    left:0px;
    transition: left 2.5s ease, opacity 2.5s ease, border 2.5s ease, top 2.5s ease;
    background: #EDDDD4;
    /* Old browsers */
    background: linear-gradient(135deg, #edddd4 0%, #fcfafa 50%, #edddd4 51%, #fcfafa 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=1 );
    /* IE6-9 fallback on horizontal gradient */
    box-shadow: 0 0 25px 5px #EDDDD4;
    border: 5px solid rgba(237, 221, 212, 0.5);
}


.DaySun-Press{
    position: absolute;
    top: -10px;
    left: -150px;
    color: transparent;
    font-weight: 600;
    padding-top: 0px;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
}
.DaySun-Press:hover{
    color: white;
}

.Toggler[data-time='Sun'] .DaySun-Press:hover{
    color: #FD8213;
    top: -5px;
    left: -150px;
}


});

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