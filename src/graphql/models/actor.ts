import gql from 'graphql-tag';

export const actor = gql`
  type Actor {
    id: Int!
    firstName: String!
    lastName: String!
    updatedAt: Date!
  }

  type Query {
    actorsByFirstName(name: String!): [Actor]
    actorsByLastName(name: String!): [Actor]
    getActor(id: ID!): Actor
    getActors: [Actor]
  }
`;
