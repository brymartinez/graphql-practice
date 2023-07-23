import gql from 'graphql-tag';

export const country = gql`
  type Country {
    id: Int!
    country: String!
    cities: [City]
    updatedAt: Date
  }

  type Query {
    getCountry(id: Int!): Country
    getCountries: [Country]
  }
`;
