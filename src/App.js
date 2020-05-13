import React, { Component, useState } from 'react';
import './App.css';
import {client} from "./ApolloRouter";
import NavRouter from "./main";
import { CSSTransitionGroup } from 'react-transition-group'
import LightSwitch from "./lightSwitch99";
import { hotjar } from 'react-hotjar';


import { ApolloProvider } from "react-apollo";




 class App extends Component{
     componentDidMount(){
         hotjar.initialize(1810823,6);
     }
    
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