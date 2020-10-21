import fastify from "fastify";
import Books from "../../lib/books";
import createDbClient from "../../lib/dbClient";

const dbClient = createDbClient();
const books = Books({ dbClient });

const app = fastify({ logger: true });

app.get("/books", async (request, reply) => {
  const allBooks = await books.getBooks();

  reply.type("application/json").code(200);

  return allBooks;
});

app.listen(3000, (err, address) => {
  if (err) throw err;

  app.log.info(`server listening on ${address}`);
});
