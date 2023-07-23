import gql from 'graphql-tag';

export const country = gql`
  type Country {
    id: Int!
    country: String!
    updatedAt: Date
  }

  type Query {
    getCountry(id: Int!): City
  }
`;
