const { movies, actors } = require("../data");

exports.seed = (knex, Promise) =>
  knex("actors_movies")
    .del()
    .then(() =>
      knex("actors_movies").insert(
        movies.map((movie, i) => ({
          movie_id: movie.id,
          actor_id: i + 1
        }))
      )
    );
