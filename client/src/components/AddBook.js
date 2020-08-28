import React from "react";
import { useQuery, gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBook = (props) => {
  return <form></form>;
};

export default AddBook;
