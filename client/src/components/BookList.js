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
  console.log(useQuery(getBooksQuery));

  return (
    <div>
      <h2>BookList</h2>
      <ul>
        <li>Book1</li>
      </ul>
    </div>
  );
};

export default BookList;
