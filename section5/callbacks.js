const booksDB = [
  {
    id: 1,
    title: "clean code",
    authorId: 1,
  },
  {
    id: 2,
    title: "the pragmatic programmer",
    authorId: 2,
  },
  {
    id: 3,
    title: "web development node",
    authorId: 3,
  },
];

const authorDB = [
  {
    id: 1,
    name: "Robert C . Martin",
    authorId: 1,
  },
  {
    id: 2,
    name: "Steve Forest",
  },
];

function getBookById(id, callback) {
  const book = booksDB.find((book) => book.id === id);
  if (!book) {
    const error = new Error();
    error.message = "Book not found";
    return callback(error);
  }
  callback(null, book);
}

getBookById(20, (err, book) => {
  if (err) {
    return console.log(err.message);
  }
  return console.log(book);
});

function getAuthorById(id, callback) {
  const author = authorDB.find((author) => author.id === id);
  if (!author) {
    const error = new Error();
    error.message = "Author not found";
    return callback(error);
  }
  callback(null, author);
}

getBookById(1, (err, book) => {
  if (err) {
    return console.log(err.message);
  }

  getAuthorById(book.authorId, (err, author) => {
    if (err) {
      return console.log(err.message);
    }
    console.log(author);
  });

  return console.log(book);
});
