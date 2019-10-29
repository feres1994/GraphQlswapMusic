import React from "react";
import ArtistContainer from "./artistContainer";
import "./home.css";
import SideBar from "../../shared/sideBar/sideBar";
class Home extends React.Component {
  state = {
    inputData: "",
    artist: ""
  };
  changeInput = e => {
    this.setState({
      inputData: e.target.value
    });
  };
  displayArtist = e => {
    this.setState({
      artists: this.state.inputData
    });
  };
  render() {
    const { artists = "", inputData } = this.state;
    return (
      <>
        {/* React Fragment */}
        <div className="row home-intro">
          <div className="col-12 overlay">
            <div className="intro-data">
              <h1>
                {" "}
                Welcome To <span className="swap-logo">SwapMusic</span>
              </h1>
              <h1 className="text-blur-out">
                {" "}
                Welcome To <span className="swap-logo">SwapMusic</span>
              </h1>
              <div className="search-container">
                <input
                  value={inputData}
                  onChange={this.changeInput}
                  placeholder="search for an artist"
                />
                <button onClick={this.displayArtist}>Search</button>
              </div>
            </div>
          </div>
        </div>
        <ArtistContainer artists={artists} />
      </>
    );
  }
}

export default Home;
