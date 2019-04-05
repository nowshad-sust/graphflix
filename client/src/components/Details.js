import React from "react";
import { graphql } from "react-apollo";
import { getMovieDetails } from "../queries";

const Details = ({ data: { loading, movie } }) => {
  if (loading) return <div>Loading ...</div>;

  const { id, title, genre, year, details, trailer, actors } = movie;

  return (
    <div className="movie-details">
      <div className="movie-trailer">
        <iframe
          title={id + title}
          src={trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <span>{year}</span>
        <p>{genre}</p>
        <p>Key Actors: {actors.map(({ name }) => name).join(", ")}</p>
        <p>{details}</p>
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
