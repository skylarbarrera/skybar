import React, { Component ,Text,Link} from 'react';
import {Layout} from 'react-mdl';
import './Card.css';
import Button from "./Button"

class RCard extends Component {
    render() {
        return (


                <div>

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

                </div>



    );
    }
}

export default RCard;
