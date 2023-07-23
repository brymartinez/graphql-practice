import gql from 'graphql-tag';

export const actorInfo = gql`
  type ActorInfo {
    id: Int
    firstName: String
    lastName: String
  }

  type Query {
    getActorInfo(id: ID!): ActorInfo
  }
`;
