import React, { Component ,Text} from 'react';
import './navBar.css';
import {StyleSheet, css} from 'aphrodite';
import {Link } from "react-router-dom";
import { isMobileOnly} from 'react-device-detect';
//import Hamburger from 'react-hamburgers';


var styles = StyleSheet.create( {
    navbar:{
       

        backgroundColor: "transparent",
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'left',
        width: '90%',
        height: '10vh',
        zIndex: 1,
        overflow: 'hidden'
        
},
    navlogo:{
        marginTop: '0px',
        width: '60px',
        height: '60px',
        borderRadius: '30px',
        '@media (max-width: 600px)':{



        }

},
navbarnav: {
    display: 'flex',

    textAlign: 'center',
    position: 'absolute',
    flexDirection: 'row',
    top:'2.5vh',
    left: '5vw',
    '@media (max-width: 600px)':{
        flexDirection: 'row',
        paddingLeft: '70px',
        top: '5px',
        width: '80%',

    }
    
},
navbarnavMobile: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    position: 'absolute',
    top:'2.5vh',
    left: '5vw',
    zIndex: '15',
    '@media (max-width: 600px)':{
        flexDirection: 'row',
        paddingLeft: '70px',
        top: '5px',
        width: '80%',

    }
    
},
navbarnavitem:{
    fontSize: '22px',
    marginRight: '30px',
    color: '#FFFFFF',
    lineHeight: '51px',
    height: '51px',
    position: 'relative',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    textAlign: 'center',
    ':hover':{
        color: '#F0C760'
    }
},





navicon:{

},

});


class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state ={
            visible: false,
            day: this.props.day
        }
    }
    toggleMenu(){
        console.log('updating state')
        this.setState({
            visible: !this.state.visible,
        })
    }
    render() {
        
        {console.log("Are we mobile? " + isMobileOnly)}
        {console.log("Day?? " + this.state.day)}
        if( !isMobileOnly){
            return (
                
                <div className={css(styles.navbar)}>

                    <div className={css(styles.navbarnav)}>
                            <Link className={css(styles.navbarnavitem)}  to={'./'} >Home</Link>
                            <Link className={css(styles.navbarnavitem)}  to ={'./projects'}>   Projects   </Link>
                            
                            <a className={css(styles.navbarnavitem)} href={'https://ipfs.io/ipfs/QmYmgFMqK6iTrQaxe7UugWF9UHQavLkpD3YYsaPAe3v66w/SkylarBarrera-Resume.pdf'}>Resume</a>
    
    
    
                    </div>
    
                </div>
    
            );
        }
        else{
            return(
                <div className={css(styles.navbar)}>
                    <div
                    style ={{width: '100px', height: '100px', backgroundColor: '#FFFFFF', fontSize: '20px' }}
                    active={this.state.visible}
                    type="slider"
                    onClick={() => this.toggleMenu()}/>
                    {!this.state.visible? null :  <div className={css(styles.navbarnavMobile)}>
                            <Link className={css(styles.navbarnavitem)}  to={'./'} >Home</Link>
                            <Link className={css(styles.navbarnavitem)}  to ={'./projects'}>   Projects   </Link>
                            
                            <a className={css(styles.navbarnavitem)} href={'https://ipfs.io/ipfs/QmYmgFMqK6iTrQaxe7UugWF9UHQavLkpD3YYsaPAe3v66w/SkylarBarrera-Resume.pdf'}>Resume</a>
    
                            
                    </div>}
                    

                   
                </div>
            )
        }
       
    }
}

export default Navbar;
