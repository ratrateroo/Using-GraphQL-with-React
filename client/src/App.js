import React from "react";
import { ApolloClient, ApolloProvider } from "@apollo/client";

import BookList from "./components/BookList";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Let's Work</h1>;
        <BookList />
      </div>
    </ApolloProvider>
  );
};

export default App;
