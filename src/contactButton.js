import React, { Component } from "react";
import './contactButton.css'




class ContactButton extends Component {
    state ={
        hover: false
    }
    render() {
        return(
            <div style ={{paddingTop: '2rem' }}>
                <a  className='contactButton' href={'mailto:skylar.barrera@gmail.com'}> Get in Touch</a>
            </div>
    
    
        );
    }
}

export default ContactButton;


