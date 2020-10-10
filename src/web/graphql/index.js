import { ApolloServer, gql } from "apollo-server";
import Books from "../../lib/books";

const ALL_BOOKS = [
  { id: "001", title: "Example Book 1", author: "Example Author" },
  { id: "002", title: "Example Book 2", author: "Example Author" },
];
const dbClient = {
  query: () => Promise.resolve(ALL_BOOKS),
};
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
