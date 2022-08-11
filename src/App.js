 
import React from 'react';
import ApolloClient from 'apollo-boost'; // default package
import {ApolloProvider} from '@apollo/react-hooks'; // named import
import { PokemonsContainer } from './containers/PokemonsContainer';
import './App.css';


function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  });


  return (
    <ApolloProvider client={client}>
    <main>
      <PokemonsContainer />
    </main>
    </ApolloProvider>
  );
}

export default App;
