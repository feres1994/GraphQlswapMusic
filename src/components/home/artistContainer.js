import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ArtistItem from "./artistItem";
import Loader from "../../shared/loader/loader";
class ArtistContainer extends React.Component {
  render() {
    const { artists } = this.props;
    return (
      <Query
        query={gql`
        {
          search {
            artists(query: "${artists}") {
              nodes {
                id
                mbid
                name
                country
                type
                disambiguation
                sortName
                
              }
            }
          }
        }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error)
            return (
              <div className="row p-4">
                <div
                  className="col-12"
                  style={{ paddingTop: "50px", minHeight: "40vh" }}
                >
                  <h3
                    style={{
                      textShadow: "9px 8px 2px rgba(30,5,0,0.3)",
                      color: "#92b0ca"
                    }}
                  >
                    please enter an artist name
                  </h3>
                </div>
              </div>
            );

          return (
            <div className="row p-4 ">
              <div className="col-12 p-4">
                {artists === "" ? (
                  <></>
                ) : (
                  <h2
                    style={{
                      textShadow: "9px 8px 2px rgba(30,5,0,0.3)",
                      color: "#92b0ca"
                    }}
                  >
                    Result for {artists}
                  </h2>
                )}
              </div>

              {data.search.artists.nodes.map(artist => (
                <div className="col-lg-4 col-md-6 p-4">
                  {" "}
                  <ArtistItem
                    artist={artist}
                    addToFav={this.addToListFav}
                    removeFromFav={this.removeFromListFav}
                  />{" "}
                </div>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ArtistContainer;
