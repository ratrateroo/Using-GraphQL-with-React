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
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(loading, error, data);

  const displayBooks = () => {
    if (loading) {
      return <h2>Loading Books</h2>;
    } else {
      if (data) {
        return data.books.map((book) => {
          return <li>{book.name}</li>;
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
    </div>
  );
};

export default BookList;
