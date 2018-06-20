import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { GET_SPACE_DETAILS } from '../graphql/queries';
import { MARK_ATTENDED } from '../graphql/mutations';

const SpaceDetail = (props) => {
  const spaceId = props.match.params.id;
  return (
    <Query query={GET_SPACE_DETAILS} variables={{ spaceId }}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;
        const space = data.getSpace;
        if (!space.id) return <div>Couldn't locate event details</div>;

        return (
          <div className="space-details">
            <h4>Name:</h4>
            <p><a href={space.link} target="blank">{space.name}</a></p>
            <h4>Date:</h4>
            <p>{space.date}</p>
            <h4>Cost:</h4>
            <p>${space.cost}</p>
            {space.location && (
              <div>
                <h4>Venue:</h4>
                <p>{space.location.name}<br />{space.location.address_1}<br/>{space.location.city}</p>
              </div>
            )}
            <h4>Description:</h4>
            <div dangerouslySetInnerHTML={{ __html: space.description }} />
            { !space.attended &&
              <Mutation mutation={MARK_ATTENDED} variables={{ id: space.id }}>
                {markAttended => (
                  <div id='attended'>
                    <button className="attended-btn" type="button" onClick={async () => {
                      await markAttended()
                      props.history.push(`/bingo/${props.match.params.month}`)
                    }}>Attended</button>
                  </div>
                )}
              </Mutation>
            }
          </div>
        );
      }}
    </Query>
  );
};

export default SpaceDetail;
