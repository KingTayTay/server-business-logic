/**
 * Creates a db client
 * In production this would be swapped for an ORM for safer handling of db queries
 */

const ALL_BOOKS = [
  { id: "001", title: "Example Book 1", author: "Example Author" },
  { id: "002", title: "Example Book 2", author: "Example Author" },
];

const createDbClient = () => {
  const dbClient = {
    query: () => Promise.resolve(ALL_BOOKS),
  };

  return dbClient;
};

export default createDbClient;
