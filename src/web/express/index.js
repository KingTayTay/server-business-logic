import express from "express";
import Books from "../../lib/books";

const ALL_BOOKS = [{ id: "001", title: "Example Book 1" }];

const app = express();

const dbClient = {
  query: () => Promise.resolve(ALL_BOOKS),
};
const books = Books({ dbClient });

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
