import { gql } from "apollo-boost";

const getMovies = gql`
  {
    movies {
      id
      title
      genre
      year
      images
    }
  }
`;

const getMovieDetails = gql`
  query GetMovie($id: ID) {
    movie(id: $id) {
      id
      title
      genre
      year
      details
      trailer
      images
      actors {
        name
      }
    }
  }
`;

export { getMovies, getMovieDetails };
