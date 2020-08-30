import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const BookDetails = (props) => {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log("log1", loading, error, data);

  const displayBooks = () => {
    if (loading) {
      return <h2>Loading Books</h2>;
    } else {
      if (data) {
        return data.books.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        });
      } else {
        return <h2>No Books</h2>;
      }
    }
  };

  return (
    <div>
      <p>Output book details here.</p>
    </div>
  );
};

export default BookDetails;
