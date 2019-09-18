import React, { Component } from 'react';
import './App.css';
import {client} from "./ApolloRouter";
import NavRouter from "./main"
import LightSwitcher from "./LightSwitcher";


import { ApolloProvider } from "react-apollo";
import Navbar from './navBar';

 class App extends Component{
     render() {
         return(
         <ApolloProvider style = {{width: '100vw', height: '100vh'}} client={client}>
             <div>
             <Navbar/>
             </div>
             
             <div style={{overflow: 'hidden',zIndex: '4' }}>
                <LightSwitcher/>
                
                </div>
             <NavRouter>

             </NavRouter>
         </ApolloProvider>
     )
     }
}

export default App;