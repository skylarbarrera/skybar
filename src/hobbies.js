import React, { Component } from 'react';
import './App.css';
import {StyleSheet, css} from 'aphrodite';


var styles = StyleSheet.create({
    coverContainer:{
        width: '100%',
        height: '60%',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        color: '#FFFFFF',
        overflow: 'no-content',
        position: 'relative',
        alignSelf: 'center',
        margin: 'auto',
        marginTop: '5%',
        '@media (max-width: 600px)':{
            width: '90%',
            'padding-left': '0px',
            margin: 'auto',
            textAlign: 'center'


        }
    }})
class Hobbies extends Component {
    render() {
        return (
            <div className={css(styles.coverContainer)} >
                <h1>Smiles in Chat :)</h1>
            
            <div>
                <h1> Music</h1> 
                <text> Spotify Info/Overview</text>
            </div>

            <div>
                <h1> Travel</h1> 
                <text> World Map with Marked Locations</text>
            </div>

            <div>
                <h1> Reading List</h1> 
                <text> What I've Read</text>
                <text> What I want to Read</text>
            </div>
            
            <div>
                <h1> TV & Movies</h1> 
                <h3> What I'm Watching</h3>
                <h3> What I've Watched</h3>
            </div>

            <div>
                <h1> Socials</h1> 
                <text> Do I put these in footer?</text>
            </div>




            </div>

        );
    }
}

export default Hobbies;
