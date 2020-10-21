import { ApolloServer, gql } from "apollo-server";
import Books from "../../lib/books";
import createDbClient from "../../lib/dbClient";

const dbClient = createDbClient();
const books = Books({ dbClient });

const typeDefs = gql`
  type Book {
    id: String
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books.getBooks(),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
