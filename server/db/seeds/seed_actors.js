const { actors } = require("../../data");

exports.seed = (knex, Promise) =>
  knex("actors")
    .del()
    .then(() =>
      knex("actors").insert(actors.map(actor => ({ name: actor.name })))
    );
