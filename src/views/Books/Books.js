import { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/books';

import BooksList from '../../components/BooksList/BooksList';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {books.map((book) => {
        return <BooksList key={book.id} {...book} />;
      })}
    </div>
  );
}
