import React, { Component ,Text,Link} from 'react';
import './Card.css';
import Button from "./Button";
import {StyleSheet, css} from 'aphrodite';

var styles = StyleSheet.create( {
    base: {
        background: 'blue',
        border: 0,
        borderRadius: 4,
        color: 'white',
        padding: '1.5em'
    }
});

class RCard extends Component {
    render() {
        return (

                <div className='Card' >
                    <a className='Card__box' href={"https://wcwm.wm.edu/" } target="_blank">
                    <img className='Card__image' src={ 'https://isora.me/hire-me/img/cases/trader0x_website_made.gif'} >
                    </img>
                    <div className='Card__info'>
                        <h3 className='Card__title'>WCWM</h3>
                          <div className='Card__description'  >
                                Designed & Developed for WCWM, William & Mary's College Radio Station


                        </div>
                        <div className='Card__hover'>
                            <Button />
                        </div>
                    </div>
                    </a>
                </div>





    );
    }
}

export default RCard;
