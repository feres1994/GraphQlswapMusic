import React, { Component } from "react";
import ArtistItem from "../home/artistItem";
import "./fav.css";
export class index extends Component {
  state = {
    listFav: []
  };
  componentDidMount() {
    this.setState({
      listFav: JSON.parse(localStorage.getItem("favorite"))
    });
  }
  render() {
    const { listFav } = this.state;
    return (
      <div className="row" style={{ paddingTop: "120px" }}>
        <div className="col-12">
          <h3>favorite artists</h3>
        </div>
        {listFav &&
          listFav.map(el => (
            <div
              className="fav-artist-card col-lg-4"
              style={{ color: "white" }}
            >
              <ArtistItem artist={el} type={"fav"} />
            </div>
          ))}
      </div>
    );
  }
}

export default index;
