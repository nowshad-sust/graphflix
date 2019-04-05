const { movies } = require("../../data");

exports.seed = (knex, Promise) =>
  knex("movies")
    .del()
    .then(() =>
      knex("movies").insert(
        movies.map(movie => ({
          title: movie.Title,
          year: movie.Year,
          rating: movie.Rating,
          details: movie.Details,
          trailer: movie.Trailer
        }))
      )
    );
