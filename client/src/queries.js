import { gql } from "apollo-boost";

const getMovies = gql`
  {
    movies {
      id
      Title
      Genre
      Year
      Images
    }
  }
`;

const getMovieDetails = gql`
  query GetMovie($id: ID) {
    movie(id: $id) {
      id
      Title
      Genre
      Year
      Details
      Trailer
      Images
      Actors {
        name
      }
    }
  }
`;

export { getMovies, getMovieDetails };
