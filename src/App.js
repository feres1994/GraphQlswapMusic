import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Route, Switch } from "react-router-dom";
import Favorite from "./components/favorite";
import Details from "./components/details";
import Home from "./components/home";
import SideBar from "./shared/sideBar/sideBar";

const client = new ApolloClient({
  uri: "https://graphbrainz.herokuapp.com/"
});
class App extends React.Component {
  state = {
    isSideBar: false,
    widthSide: 0,
    displayButton: "block"
  };

  toggleSideBar = () => {
    if (this.state.isSideBar === false) {
      this.setState({
        isSideBar: true,
        widthSide: 200,
        displayButton: "none"
      });
    } else {
      this.setState({
        isSideBar: false,
        widthSide: 0,

        displayButton: "block"
      });
    }
  };
  render() {
    const { isSideBar, widthSide, displayButton } = this.state;
    return (
      <div className="App" style={{ position: "relative" }}>
        <div className="container-fluid my-main-app">
          {isSideBar ? (
            <SideBar toggle={this.toggleSideBar} size={widthSide} />
          ) : (
            <button
              style={{
                position: "absolute",
                top: "50px",
                right: "50px",
                display: displayButton,
                zIndex: "1000"
              }}
              onClick={this.toggleSideBar}
              className="toggleBtn"
            >
              <i class="fas fa-bars fa-2x"></i>{" "}
            </button>
          )}
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
}

export default App;
