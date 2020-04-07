import React, { Component } from 'react';
//import Spotify from 'spotify-web-api-js';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';

export const authEndpointSpotify = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "212fac6ea3ed42ffbd79e46520aa0264";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];

var res;
async function fetchSpotify() {
    var spotifyApi= new SpotifyWebApi();
   
    spotifyApi.setAccessToken("BQBBMdxkxlFCYmqdYTfk3iZYyK_aFwV_ixTJsZ6O86nqA5MOyz5RFJyrwYc4q93F3s0MZ9ahPn_EKvA_qA6T5z6OG3BAQFBiQLmuCSxYP_uu4epMRog_BmHzUVifdTA9_04zZSoodsT94rkt");
    //spotifyApi.getMyRecentlyPlayedTracks()
    res = spotifyApi.getMyTopTracks();
    console.log(res)
    res = spotifyApi.getMyRecentlyPlayedTracks();
    console.log(res)}







class SpotifyComponent extends Component {
     componentDidMount(){
         console.log("fetching spotify")
        fetchSpotify();
    }

    render() {
        {console.log(res)}
        return (
            <div style = {{display: 'flex', flexDirection: 'row'}}>
            </div>
        );
    }
}

export default SpotifyComponent;
