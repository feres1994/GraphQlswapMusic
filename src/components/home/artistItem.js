import React from "react";
import { Redirect } from "react-router-dom";
class ArtistItem extends React.Component {
  state = {
    stars:
      this.props.type === "fav"
        ? "fas fa-star fav-star"
        : "far fa-star normal-star",
    redirectTo: false,
    artistId: ""
  };
  redirectToDetail = id => {
    this.setState({
      redirectTo: true,
      artistId: id
    });
  };
  changeStarToFavorite = (person, id) => {
    const s = localStorage.getItem("favorite");

    if (this.state.stars === "far fa-star normal-star") {
      this.setState({
        stars: "fas fa-star fav-star"
      });
      if (s) {
        const tab = JSON.parse(s);
        localStorage.setItem("favorite", JSON.stringify(tab.concat(person)));
      } else {
        localStorage.setItem("favorite", JSON.stringify([].concat(person)));
      }
    } else {
      this.setState({
        stars: "far fa-star normal-star"
      });
      const tabToRemove = JSON.parse(s);
      localStorage.setItem(
        "favorite",
        JSON.stringify(tabToRemove.filter(el => el.id !== id))
      );
    }
  };
  render() {
    const { stars, redirectTo, artistId } = this.state;
    const { artist, type } = this.props;
    if (redirectTo) {
      return <Redirect to={`/detail/${artistId}`} />;
    }
    return (
      <div className="col-12" style={{ height: "360px" }}>
        <div className="artist-data">
          <div className="artist-option">
            <p>
              country:{" "}
              <span className="data-result">{artist.country || "US"}</span>
            </p>
            <div className="card-icons">
              <i
                class={stars}
                onClick={() => this.changeStarToFavorite(artist, artist.id)}
              ></i>
              <i
                class="far fa-eye normal-star"
                onClick={() => this.redirectToDetail(artist.mbid)}
              ></i>
            </div>
          </div>
          <div className="block-down-card">
            <div className="artist-option ">
              <p>
                Artist: <span className="data-result">{artist.name}</span>
              </p>
              <p>
                Type: <span className="data-result">{artist.type}</span>
              </p>
            </div>
            <div className="artist-option">
              <p>
                Description:{" "}
                <span className="data-result">
                  {artist.disambiguation === null
                    ? "no description"
                    : artist.disambiguation}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ArtistItem;
