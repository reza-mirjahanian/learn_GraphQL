import { ApolloServer, gql } from 'apollo-server';
const typeDefs = gql`
  type Query {
    greeting: String
  }
`;
console.log(typeDefs);
const resolvers = {
  Query: {
    greeting: () => 'Hello worldl',
  },
};
const init = async () => {
  try {
  } catch (e) {
    console.log(e);
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await server.listen({ port: 9000 });
console.log(`Server running at ${url}`);

init().then(() => {});

console.log('Server Is Running!');

process
  .on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at Promise', {
      reason,
      p,
    });
  })
  .on('uncaughtException', (err) => {
    console.error('Uncaught Exception thrown', {
      err,
    });
  });
