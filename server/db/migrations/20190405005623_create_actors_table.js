exports.up = (knex, Promise) =>
  knex.schema.createTable("actors", table => {
    table.increments();
    table.string("name").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

exports.down = (knex, Promise) => knex.schema.dropTable("actors");
