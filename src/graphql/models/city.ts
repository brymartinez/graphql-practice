import gql from 'graphql-tag';

export const city = gql`
  type City {
    id: Int!
    city: String!
    countryId: Int!
    country: Country!
    updatedAt: Date!
  }

  type Query {
    getCity(id: Int!): City
  }
`;
