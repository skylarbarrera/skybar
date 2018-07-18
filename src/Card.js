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
        width: '350px',
        height: '300px',
        minWidth: '275px',
        maxWidth: '350px',
        margin: 'auto',
        display: 'flex',
        marginRight: '90px',
        '@media (max-width: 600px)':{
            marginRight: '0px',
            marginTop: '20px',
            flexDirection: 'column',
            borderRadius: '10px',
            width: '300px',
            height: '350px'


        }

    },

    cardBox:{
        textDecoration: 'none',
        color: '-webkit-link',
        display: 'flex',
        flexDirection: 'column'

    },

    cardImage:{
        width:'100%',
        height: '60%'
    },
    cardInfo:{
        padding: '0px 0px 0px 10px',



    },

    cardTitle:{
        marginTop: '5px',
        marginBottom: '10px',
        fontSize: '18px',
        color: '#0065FF',


    },

    cardDescription:{
        fontSize: '15px',
        color: 'rgba(32, 32, 32, 0.6)',
        marginBottom: '10px'

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
        width: '100%',

    }
});

class RCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Title from props..',
            content: 'Content from props..',
            url: './',
            gif: 'https://isora.me/hire-me/img/cases/trader0x_website_made.gif'
        }
    }

    render() {
        return (

                <div className={css(styles.card) }>
                    <a className={css(styles.cardBox) } href={this.props.url } target="_blank">
                    <img className={css(styles.cardImage) } src={ 'https://isora.me/hire-me/img/cases/trader0x_website_made.gif'} >
                    </img>
                    <div className={css(styles.cardInfo) }>
                        <h3 className={css(styles.cardTitle) }>{this.props.title}</h3>
                          <div className={css(styles.cardDescription) } >
                              {this.props.content}


                        </div>
                        <div className={css(styles.cardHover) }>
                            <Button   />
                        </div>
                    </div>
                    </a>
                </div>





    );
    }
}

export default RCard;
