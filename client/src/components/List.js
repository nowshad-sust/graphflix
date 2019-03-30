import React from "react";
import Movie from "./Movie";
import { graphql } from "react-apollo";
import { getMovies } from "../queries";

const List = ({ data: { loading, movies = [] }, setSelectedMovie }) => (
  <div className="list movies">
    {loading
      ? "Loading..."
      : movies.map(movie => (
          <Movie
            key={`movie-${movie.id}`}
            {...movie}
            setSelectedMovie={setSelectedMovie}
          />
        ))}
  </div>
);

export default graphql(getMovies)(List);
