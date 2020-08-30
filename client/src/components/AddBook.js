import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

const AddBook = (props) => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [addBook] = useMutation(addBookMutation);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const genreChangeHandler = (e) => {
    setGenre(e.target.value);
    console.log(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({ variables: { name: name, genre: genre, authorId: author } });

    //addBook();
    addBook({
      variables: { name: name, genre: genre, authorId: author },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  const { loading, data } = useQuery(getAuthorsQuery);
  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading Authors</option>;
    } else {
      if (data) {
        return data.authors.map((author) => {
          return (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          );
        });
      } else {
        return <option>No Authors</option>;
      }
    }
  };

  return (
    <form id='add-book' onSubmit={submitHandler}>
      <div className='field'>
        <label>Book name:</label>
        <input type='text' onChange={nameChangeHandler} />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input type='text' onChange={genreChangeHandler} />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select onChange={authorChangeHandler}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
