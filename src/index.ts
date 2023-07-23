import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';
import { initialize } from './datasource/datasource';

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await initialize();

  startStandaloneServer(server, {
    listen: { port: 4000 },
  }).then(async ({ url }) => {
    console.log(`Server ready at ${url}`);
  });
};

startServer();
