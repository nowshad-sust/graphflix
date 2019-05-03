const { movies } = require("../data");

exports.seed = (knex, Promise) =>
  knex("movies")
    .del()
    .then(() =>
      knex("movies").insert(
        movies.map(({ id, title, year, rating, details, trailer }) => ({
          id,
          title,
          year,
          rating,
          details,
          trailer
        }))
      )
    );
