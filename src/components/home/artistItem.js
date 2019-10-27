import React from "react";
import { Redirect } from "react-router-dom";
class ArtistItem extends React.Component {
  state = {
    stars: "far fa-star normal-star",
    redirectTo: false,
    artistId: ""
  };
  redirectToDetail = id => {
    this.setState({
      redirectTo: true,
      artistId: id
    });
  };
  changeStarToFavorite = () => {
    if (this.state.stars === "far fa-star normal-star") {
      this.setState({
        stars: "fas fa-star fav-star"
      });
    } else {
      this.setState({
        stars: "far fa-star normal-star"
      });
    }
  };
  render() {
    const { stars, redirectTo, artistId } = this.state;
    const { artist } = this.props;
    if (redirectTo) {
      return <Redirect to={`/detail/${artistId}`} />;
    }
    return (
      <div className="col-12">
        <div
          className="artist-data"
          onClick={() => this.redirectToDetail(artist.id)}
        >
          <p className="artist-name">{artist.name}</p>
          <div className="artist-option">
            <i class={stars} onClick={this.changeStarToFavorite}></i>
          </div>
        </div>
      </div>
    );
  }
}
export default ArtistItem;
