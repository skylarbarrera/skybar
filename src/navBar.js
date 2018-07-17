import React, { Component ,Text} from 'react';
import './navBar.css';
import {StyleSheet, css} from 'aphrodite';

var styles = StyleSheet.create( {
    navbar:{
        marginTop: '10px',
        marginRight: '10px',

        backgroundColor: "#181818",
        width: '60px',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        zIndex: 3,
        'border-top-left-radius': '30px',
        'border-top-right-radius': '30px',
        '@media (max-width: 600px)':{
            width: '95%',
            height: '60px',
            'border-top-right-radius': '30px',
            'border-bottom-left-radius': '30px',
            'border-bottom-right-radius': '30px',

        }
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
    flexDirection: 'column',
    top:'40%',
    width: '100%',
    '@media (max-width: 600px)':{
        flexDirection: 'row',
        paddingLeft: '70px',
        top: '5px',
        width: '80%',

    }
},

navbarnavitem:{
    fontSize: '22px',
    color: '#FFFFFF',
    lineHeight: '51px',
    height: '51px',
    position: 'relative',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    textAlign: 'center',
    margin: 'auto'

},





navicon:{

},

});


class Navbar extends Component {
    render() {
        return (
            <div className={css(styles.navbar)}>
                <a href={'./'}>
               <img className={css(styles.navlogo)} src={'https://pbs.twimg.com/profile_images/639081420288208896/pANEqZ4p_400x400.png'}/>
                </a>
                <div className={css(styles.navbarnav)}>
                        <a className={css(styles.navbarnavitem)}><i className={'icon ion-ios-home'} style={{fontSize: '40px', color: '#D44A70', textAlign: 'center', paddingRight:0}} ></i></a>
                        <a className={css(styles.navbarnavitem)}><i className={'icon ion-ios-filing'} style={{fontSize: '40px', color: '#D44A70', textAlign: 'center', paddingRight:0}}></i></a>
                        <a className={css(styles.navbarnavitem)}><i className={'icon ion-ios-paper'} style={{fontSize: '40px' , color: '#D44A70', textAlign: 'center', paddingRight:0}}></i></a>


                </div>

            </div>

        );
    }
}

export default Navbar;
