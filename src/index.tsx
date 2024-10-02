import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,

} from "@apollo/client";
// import GetUsers from "./Components/GetUsers";
// import Form from "./Components/Form";



const client = new ApolloClient({
  uri:"https://graphql-jokes.onrender.com/graphql",
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode> 
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    </React.StrictMode>
  </BrowserRouter>
);
