exports.up = (knex, Promise) =>
  knex.schema.createTable("movies", table => {
    table.increments();
    table.string("title").notNullable();
    table.integer("year").notNullable();
    table.float("rating").notNullable();
    table.longtext("details").notNullable();
    table.string("trailer").notNullable();

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

exports.down = (knex, Promise) => knex.schema.dropTable("movies");
