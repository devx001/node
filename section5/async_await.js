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

async function getBookById(id) {
  const book = booksDB.find((book) => book.id === id);
  if (!book) {
    const error = new Error();
    error.message = "Book not found";
    throw error;
  }
  return book;
}

async function getAuthorById(id) {
  const author = authorDB.find((author) => author.id === id);
  if (!author) {
    const error = new Error();
    error.message = "Author not found";
    throw error;
  }
  return author;
}

async function main() {
  try {
    const book = await getBookById(5);
    const author = await getAuthorById(book.authorId);
    console.log(`this book ${book.title} was written by ${author.name}`);
  } catch (error) {
    console.log(error.message);
  }
}

main();
