import { useEffect, useState } from 'react';
import { deleteBook, getAllBooks } from '../services/book.service';
import type { BookDto } from '../types/BookDto';
import { Link } from 'react-router';

function Home() {
  const [books, setBooks] = useState<BookDto[]>([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    getAllBooks()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = (book: BookDto) => {
    if (confirm(`Are you sure you want to delete the book ${book.title}?`)) {
      deleteBook(book.isbn)
        .then((res) => {
          console.log(res);
          alert(`The book ${book.title} has been successfully deleted.`);
          getAllBooks();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="min-h-screen pt-26 pb-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center mt-10 text-3xl font-bold">List of Books</h1>
      <div className="container mt-10 space-y-4">
        <div className="flex flex-row space-x-4 flex-wrap justify-center items-center gap-y-4">
          {books.map((book) => (
            <div
              key={book.isbn}
              className="min-w-52 bg-gray-100 p-4 rounded-md flex flex-col justify-self-start"
            >
              <h2 className="text-lg font-bold">{book.title}</h2>
              <p className="text-sm">
                <strong>Author</strong>: {book.author}
              </p>
              <p className="text-sm">
                <strong>Price</strong>: ${book.price}
              </p>
              <div className="flex my-2">
                <Link
                  className="flex-1 bg-yellow-600 text-white p-1 mr-2 rounded-md text-center"
                  to={`/edit-book/${book.isbn}`}
                >
                  Edit
                </Link>
                <button
                  className="flex-1 bg-red-600 text-white p-1 rounded-md"
                  onClick={() => handleDelete(book)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
