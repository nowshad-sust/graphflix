const knex = require("../db/index");

const resolvers = {
  Query: {
    movie: (_, { id }) =>
      knex("movies")
        .where({ id })
        .first(),
    movies: () => knex("movies"),
    actor: (_, { id }) =>
      knex("actors")
        .where({ id })
        .first(),
    actors: () => knex("actors")
  },
  Movie: {
    actors: ({ id: movie_id }) =>
      knex("actors_movies")
        .where({ movie_id })
        .then(rows =>
          rows.map(({ actor_id }) =>
            knex("actors")
              .where("id", actor_id)
              .first()
          )
        )
  },
  Mutation: {
    createActor: async (_, { name }) => {
      const [id] = await knex("actors").insert({ name });
      return { id, name };
    }
  }
};

module.exports = resolvers;
