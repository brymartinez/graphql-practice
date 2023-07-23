import gql from 'graphql-tag';

export const actor = gql`
  type Actor {
    id: Int
    firstName: String
    lastName: String
  }

  type Query {
    actorsByFirstName(name: String!): [Actor]
    actorsByLastName(name: String!): [Actor]
    actorById(id: ID!): Actor
    getActors: [Actor]
  }
`;
