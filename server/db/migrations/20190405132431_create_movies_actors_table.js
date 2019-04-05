exports.up = function(knex, Promise) {
  return knex.schema.createTable("actors_movies", table => {
    table
      .integer("actor_id")
      .unsigned()
      .notNull();
    table
      .foreign("actor_id")
      .references("id")
      .inTable("actors");

    table
      .integer("movie_id")
      .unsigned()
      .notNull();
    table
      .foreign("movie_id")
      .references("id")
      .inTable("movies");
  });
};

exports.down = (knex, Promise) => knex.schema.dropTable("actors_movies");
