import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Route, Switch } from "react-router-dom";
import Favorite from "./components/favorite";
import Details from "./components/details";
import Home from "./components/home";

const client = new ApolloClient({
  uri: "https://graphbrainz.herokuapp.com/"
});
function App() {
  return (
    <div className="App">
      <div className="container-fluid my-main-app">
        <ApolloProvider client={client}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/fav" component={Favorite} />
            <Route exact path="/detail/:id" component={Details} />
          </Switch>
        </ApolloProvider>
      </div>
    </div>
  );
}

export default App;
