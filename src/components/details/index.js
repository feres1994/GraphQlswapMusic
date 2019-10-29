import React from "react";
import "./det.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../shared/loader/loader";
class Detail extends React.Component {
  render() {
    const { params } = this.props.match;
    return (
      <Query
        query={gql`
          {
            lookup {
              artist(mbid: "${params.id}") {
                name
                disambiguation
                aliases {
                  name
                }
                country
                lifeSpan {
                  begin
                  end
                  ended
                }
                gender
                type
                recordings(after: "", first: 10) {
                  nodes {
                    id
                    mbid
                    title
                    disambiguation
                    length
                    video
                    rating {
                      value
                      voteCount
                    }
                    artists(after: "", first: 10) {
                      nodes {
                        name
                      }
                    }
                    tags(after: "", first: 10) {
                      nodes {
                        name
                        count
                      }
                    }

                    aliases {
                      name
                    }
                    artistCredits {
                      artist {
                        name
                      }
                      name
                      joinPhrase
                    }
                  }
                  totalCount
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
                <div className="col-12">
                  <h3>No Detail</h3>
                </div>
              </div>
            );

          return (
            <div className="row p-4">
              <div className="col-lg-4 col-md-6 p-4">
                <div className="artist-details">
                  <div className="artist-name-life">
                    {" "}
                    <p className="artist-name-title">
                      {data.lookup.artist.name}
                    </p>
                    <div>
                      <span>{data.lookup.artist.lifeSpan.begin}</span>
                      <span>
                        {data.lookup.artist.lifeSpan.ended === true
                          ? data.lookup.artist.lifeSpan.end
                          : ""}
                      </span>
                    </div>
                  </div>
                  <div className="artist-sub-data">
                    <p>
                      <span className="option-sud-data"> description :</span>{" "}
                      <span>
                        {data.lookup.artist.disambiguation || "not found"}
                      </span>
                    </p>
                    <p>
                      <span className="option-sud-data">Gender : </span>
                      <span>{data.lookup.artist.gender || "not found"}</span>
                    </p>
                    <p>
                      <span className="option-sud-data"> type :</span>{" "}
                      <span>{data.lookup.artist.type || "not found"}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 p-4">
                <div className="artist-recordings">
                  <h3>recordings</h3>
                  <div>
                    {data.lookup.artist.recordings.nodes.map(el => (
                      <p>{el.title}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Detail;
