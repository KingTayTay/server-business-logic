import { ApolloServer, gql } from "apollo-server";
import logger from "../../lib/logger.js";
import Books from "../../lib/books.js";
import createDbClient from "../../lib/dbClient.js";

const dbClient = createDbClient();
const books = Books({ dbClient });

const pinoPlugin = {
  async requestDidStart(requestContext: any) {
    logger.info({ data: requestContext }, "requestDidStart");
  },
};

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

const server = new ApolloServer({ typeDefs, resolvers, plugins: [pinoPlugin] });

server.listen().then(({ url }) => {
  logger.info(`🚀  Server ready at ${url}`);
});
