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
    Details,
    Trailer,
    Actors: { name }
  } = movie;

  return (
    <div className="movie-details">
      <div className="movie-trailer">
        <iframe
          src={Trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="movie-info">
        <h3>{Title}</h3>
        <span>{Year}</span>
        <p>{Genre}</p>
        <p>Key Actor: {name}</p>
        <p>{Details}</p>
      </div>
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
