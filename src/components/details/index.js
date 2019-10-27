import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

class Detail extends React.Component {
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
                  <h3>No Detail</h3>
                </div>
              </div>
            );

          return <div className="row p-4">hhhh</div>;
        }}
      </Query>
    );
  }
}

export default Detail;
