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

function getBookById(id) {
  return new Promise((resolve, reject) => {
    const book = booksDB.find((book) => book.id === id);
    if (!book) {
      const error = new Error();
      error.message = "Book not found";
      reject(error);
    }
    resolve(book);
  });
}

function getAuthorById(id) {
  return new Promise((resolve, reject) => {
    const author = authorDB.find((author) => author.id === id);
    if (!author) {
      const error = new Error();
      error.message = "Author not found";
      reject(error);
    }
    resolve(author);
  });
}

getBookById(10)
  .then((book) => getAuthorById(book.authorId))
  .then((author) => console.log(author))
  .catch((error) => console.log(error.message));
