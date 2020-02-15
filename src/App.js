import React, { Component, useState } from 'react';
import './App.css';
import {client} from "./ApolloRouter";
import NavRouter from "./main";
import { CSSTransitionGroup } from 'react-transition-group'
import LightSwitch from "./lightSwitch99";


import { ApolloProvider } from "react-apollo";
import Navbar from './navBar';

 class App extends Component{
    
     render() {
           
         return(
         <ApolloProvider style = {{width: '100vw', height: '100vh'}} client={client}>
             
             <Navbar/>
             <div style={{overflow: 'hidden',zIndex: '4' }}>
                <LightSwitch>
                <div>
               
               
                </div>

                </LightSwitch>
            {/*<LightSwitcher/>*/}
            <NavRouter>

</NavRouter>

             

             </div>
         </ApolloProvider>
     )
     }
}

export default App;