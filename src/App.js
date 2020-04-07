import React, { Component, useState } from 'react';
import './App.css';
import {client} from "./ApolloRouter";
import NavRouter from "./main";
import { CSSTransitionGroup } from 'react-transition-group'
import LightSwitch from "./lightSwitch99";


import { ApolloProvider } from "react-apollo";


 class App extends Component{
    
     render() {
           
         return(
         <ApolloProvider client={client}>
             
             
           
                <LightSwitch>
                

                </LightSwitch>
            
           
             

          
         </ApolloProvider>
     )
     }
}

export default App;