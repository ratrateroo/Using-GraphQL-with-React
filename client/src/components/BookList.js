import React from "react";
import { useQuery, gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = (props) => {
  const { loading, error, data, books } = useQuery(getBooksQuery);
  console.log(loading, error, data, books);

  const displayBooks = () => {
    if (loading) {
      return <h2>Loading Books</h2>;
    } else {
      return data.books.map((book) => {
        return <li>{book.name}</li>;
      });
    }
  };

  return (
    <div>
      <h2>BookList</h2>
      <ul>{displayBooks()}</ul>
    </div>
  );
};

export default BookList;
