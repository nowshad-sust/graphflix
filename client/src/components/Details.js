import React from "react";
import { graphql } from "react-apollo";
import { getMovieDetails } from "../queries";

const Details = ({ data: { loading, movie } }) => {
  if (loading) return <div>Loading ...</div>;

  const {
    id,
    Title,
    Genre,
    Year,
    Actors: { name }
  } = movie;

  return (
    <div className="movie-details">
      <h4>{Title}</h4>
      <p>{name}</p>
      <p>
        {Year}: {Genre}
      </p>
      <p>More Details</p>
    </div>
  );
};

export default graphql(getMovieDetails, {
  options: props => ({
    variables: {
      id: props.movieId
    }
  })
})(Details);
