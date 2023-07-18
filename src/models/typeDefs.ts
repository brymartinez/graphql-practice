import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    actorByFirstName(name: String!): Actor
  }

  type Actor {
    id: Int
    firstName: String
    lastName: String
  }
`;
