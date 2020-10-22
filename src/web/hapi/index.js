"use strict";

import Hapi from "@hapi/hapi";
import hapiPino from "hapi-pino";
import { options } from "../../lib/logger";
import Books from "../../lib/books";
import createDbClient from "../../lib/dbClient";

const init = async () => {
  const dbClient = createDbClient();
  const books = Books({ dbClient });

  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  await server.register({
    plugin: hapiPino,
    options,
  });

  server.route({
    method: "GET",
    path: "/books",
    handler: async (request, h) => {
      const allBooks = await books.getBooks();

      return allBooks;
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
