import React, {useState} from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client';
import {View} from 'react-native';
import Home from './src/modules/film';
import Routes from './src/routes/routes';
import fetch from 'cross-fetch';

// Initialize Apollo Client
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index', fetch }),
  // uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',

  cache: new InMemoryCache(),
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  },
  credentials: 'omit',
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <View style={{flex: 1, backgroundColor: "#000"}}>
        <Routes/>
      </View>
    </ApolloProvider>
  );
};

export default App;
