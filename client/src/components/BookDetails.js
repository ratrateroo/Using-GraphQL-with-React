import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const BookDetails = (props) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: props.id },
  });

  console.log("received", props.id);

  console.log("data", data);

  console.log("error", error);

  const displayBookDetail = () => {
    if (loading) {
      return <h2>Loading Book</h2>;
    } else {
      if (data) {
        console.log("if part");

        console.log(data);

        //   return Object.entries(data.book).map(([key, val]) => (
        //     <li key={key}>
        //       {key}: {val}
        //     </li>
        //   ));
      } else {
        return <h2>Details</h2>;
      }
    }
  };

  return (
    <div>
      <p>Book Details:</p>
      <ul>{displayBookDetail()}</ul>
    </div>
  );
};

export default BookDetails;
