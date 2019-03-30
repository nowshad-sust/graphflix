import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import List from "./components/List";
import Details from "./components/Details";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  return (
    <ApolloProvider client={client} className="App">
      <h1> GraphFlix </h1>
      <List setSelectedMovie={setSelectedMovie} />
      {selectedMovie ? <Details movieId={selectedMovie} /> : <div />}
    </ApolloProvider>
  );
};

export default App;
