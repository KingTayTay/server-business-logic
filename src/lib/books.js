const Books = ({ dbClient }) => {
  const getBooks = () => {
    return dbClient.query("books");
  };

  return {
    getBooks,
  };
};

export default Books;
