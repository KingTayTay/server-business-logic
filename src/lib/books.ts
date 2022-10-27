import { DbClient } from "./dbClient.js";

interface BooksConfig {
  dbClient: DbClient;
}

const Books = ({ dbClient }: BooksConfig) => {
  const getBooks = () => {
    return dbClient.query("books");
  };

  return {
    getBooks,
  };
};

export default Books;
