import fastify from "fastify";
import Books from "../../lib/books";

const ALL_BOOKS = [{ id: "001", title: "Example Book 1" }];

const dbClient = {
  query: () => Promise.resolve(ALL_BOOKS),
};
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
