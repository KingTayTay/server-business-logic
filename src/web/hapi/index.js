"use strict";

import Hapi from "@hapi/hapi";
import Books from "../../lib/books";
import createDbClient from "../../lib/dbClient";

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  const dbClient = createDbClient();
  const books = Books({ dbClient });

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
