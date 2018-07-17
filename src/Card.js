import React, { Component ,Text,Link} from 'react';
import Button from "./Button";
import {StyleSheet, css} from 'aphrodite';

var styles = StyleSheet.create( {
    card: {
        overflow: 'hidden',
        position: 'relative',
        background: '#fdfdfd',
        boxShadow: '0 2px 26px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '225px',
        maxWidth: '350px',
        margin: 'auto',
        display: 'inline-block',
        marginRight: '90px',
        '@media (max-width: 600px)':{
            marginRight: '0px',
            marginTop: '20px',
            flexDirection: 'column',
            borderRadius: '10px'


        }

    },

    cardBox:{
        textDecoration: 'none',
        color: '-webkit-link',

    },

    cardImage:{
        width:'100%',
    },
    cardInfo:{
        padding: '12px 15px 20px 18px',

    },

    cardTitle:{
        marginBttom: '10px',
        fontSize: '16px',
        color: '#0065FF',
        'font-family': '"Lato", Helvetica, sans-serif',

    },

    cardDescription:{
        fontSize: '13px',
        color: 'rgba(32, 32, 32, 0.6)',

    },

    cardHover:{
        opacity: '0',
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        margin: 'auto',
        justifyContent:'flex-end',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(-180deg, transparent 0%, rgba(255, 255, 255, 0.85) 100%)',
        'transform': 'translateY(10px)',
        'transition-property': 'opacity, transform',
        'transition-duration': '0.35s, 0.5s',
        'transition-timing-function': 'ease, ease',
        'transition-delay': '0s, 0s',
        ':hover':{
            opacity: 1
        }

    },

    cardButton:{
        position: 'absolute',
        alignSelf: 'flex-end',
        top: '80px',
        margin: 'auto',
        width: '30%',


    }
});

class RCard extends Component {
    render() {
        return (

                <div className={css(styles.card) }>
                    <a className={css(styles.cardBox) } href={"https://wcwm.wm.edu/" } target="_blank">
                    <img className={css(styles.cardImage) } src={ 'https://isora.me/hire-me/img/cases/trader0x_website_made.gif'} >
                    </img>
                    <div className={css(styles.cardInfo) }>
                        <h3 className={css(styles.cardTitle) }>WCWM</h3>
                          <div className={css(styles.cardDescription) } >
                                Designed & Developed for WCWM, William & Mary's College Radio Station


                        </div>
                        <div className={css(styles.cardHover) }>
                            <Button />
                        </div>
                    </div>
                    </a>
                </div>





    );
    }
}

export default RCard;
