import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = (props) => {
  const [selected, setSelected] = useState();
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log("log1", loading, error, data);

  const selectedHandler = (id) => {
    setSelected(id);
    console.log("selected", id);
  };

  const displayBooks = () => {
    if (loading) {
      return <h2>Loading Books</h2>;
    } else {
      if (data) {
        return data.books.map((book) => {
          return (
            <li
              key={book.id}
              onClick={() => {
                selectedHandler(book.id);
              }}
            >
              {book.name}
            </li>
          );
        });
      } else {
        return <h2>No Books</h2>;
      }
    }
  };

  return (
    <div>
      <h2>BookList</h2>
      <ul>{displayBooks()}</ul>
      <BookDetails id={selected} />
    </div>
  );
};

export default BookList;
