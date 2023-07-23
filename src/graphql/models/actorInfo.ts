import gql from 'graphql-tag';

export const actorInfo = gql`
  type ActorInfo {
    id: Int
    firstName: String
    lastName: String
  }

  type Query {
    actorInfoById(id: ID!): ActorInfo
  }
`;
