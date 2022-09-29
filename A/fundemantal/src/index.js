
import { gql } from 'apollo-server';
const typeDefs = gql`
type Query {
  greeting: String
}`
console.log(typeDefs);
const init = async () => {
  try {

  } catch (e) {
    console.log(e);
  }
};

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
