import React, { Component } from 'react';
import './App.css';
import {client} from "./ApolloRouter";
import NavRouter from "./main"

import { ApolloProvider } from "react-apollo";

 class App extends Component{
     render() {
         return(
         <ApolloProvider client={client}>
             <NavRouter>

             </NavRouter>
         </ApolloProvider>
     )
     }
}

export default App;