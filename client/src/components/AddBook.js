import React from "react";
import { useQuery, gql } from "@apollo/client";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBook = (props) => {
  const { loading, data, authors } = useQuery(getAuthorsQuery);
  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading Authors</option>;
    } else {
      if (data) {
        return data.authors.map((author) => {
          return <option>{author.name}</option>;
        });
      } else {
        return <option>No Authors</option>;
      }
    }
  };

  return (
    <form id='add-book'>
      <div className='field'>
        <label>Book name:</label>
        <input type='text' />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input type='text' />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
