import React, { Component ,Text,Link} from 'react';
import './Button.css';import {StyleSheet, css} from 'aphrodite';

var styles = StyleSheet.create( {
    button:{
        borderRadius: '4px',
        padding: '10px 40px',
        textTransform: 'uppercase',
        fontSize: '12px',
        textDecoration: 'none',
        color: 'inherit',
        letterSpacing: '0.06em',
        textAlign: 'center',
        fontWeight: '700',
        transition: 'background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s 0.04s ease, opacity 0.25s ease',
        ':hover':{
            background: 'black',
            color: 'white',
        }
    },


    buttonWhiteBlack:{
        border: '2px solid #242526',
        background: 'white',
        boxShadow: '0 4px 14px 0 rgba(202, 202, 202, 0.39)',
        borderRadius: '4px',
        color: '#242526'
},
    cardButton:{
        position: 'relative',
        width: '30%',
        bottom: '-75%',
        margin: 'auto',
        paddingTop: '10px',


    }

});

class Button extends Component {
    render() {
        return (


            <div className = {css(  styles.button, styles.buttonWhiteBlack,styles.cardButton,)}>
                View Site
            </div>



        );
    }
}

export default Button;
