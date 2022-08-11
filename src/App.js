 
import React from 'react';
import ApolloClient from 'apollo-boost'; // default package
import {ApolloProvider} from '@apollo/react-hooks'; // named import


function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.sh'
  });

  return (
    <ApolloProvider client={client}>
    <main>
      <p>I am a pokemon</p>
    </main>
    </ApolloProvider>
  );
}

export default App;
