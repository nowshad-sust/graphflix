import { gql } from "apollo-boost";

const getMovies = gql`
  {
    movies {
      id
      Title
      Genre
      Year
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
      Actors {
        name
      }
    }
  }
`;

export { getMovies, getMovieDetails };
