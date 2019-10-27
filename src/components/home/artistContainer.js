import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ArtistItem from "./artistItem";

class ArtistContainer extends React.Component {
  render() {
    const { artists } = this.props;
    return (
      <Query
        query={gql`
          {
            search {
              artists(query:"${artists}") {
                nodes {
                  id
                  name
                }
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p> Good things take time....</p>;
          if (error)
            return (
              <div className="row p-4">
                <div className="col-12">
                  <h3>please enter an artist name</h3>
                </div>
              </div>
            );

          return (
            <div className="row p-4">
              <div className="col-12 p-4">
                {artists === "" ? <></> : <h2>Result for {artists}</h2>}
              </div>
              <div className="col-lg-6 p-4">
                <div className="image-section">hhh</div>
              </div>
              <div className="col-lg-6 p-4">
                <div className="row">
                  {data.search.artists.nodes.map(artist => (
                    <ArtistItem artist={artist} />
                  ))}
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ArtistContainer;
