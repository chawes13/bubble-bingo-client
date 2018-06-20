import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </Router>
  ,
  document.getElementById('root'))
registerServiceWorker()
