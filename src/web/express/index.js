import express from "express";
import pinoExpress from "express-pino-logger";
import logger from "../../lib/logger";
import Books from "../../lib/books";
import createDbClient from "../../lib/dbClient";

const pinoMiddleware = pinoExpress({ logger });
const dbClient = createDbClient();
const books = Books({ dbClient });
const app = express();
app.use(pinoMiddleware);

/**
 * Get All Books
 */
app.get("/books", async function (req, res) {
  const allBooks = await books.getBooks();

  res.send(allBooks);
});

app.listen(3000, () => {
  console.log("Server running: { port: 3000 }");
});
