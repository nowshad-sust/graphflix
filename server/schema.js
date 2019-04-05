const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");

const knex = require("./db");

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    year: { type: GraphQLString },
    trailer: { type: GraphQLString },
    images: { type: new GraphQLList(GraphQLString) },
    details: { type: GraphQLString },
    actors: {
      type: new GraphQLList(ActorType),
      resolve: (parent, args) =>
        knex("actors_movies")
          .select("actor_id")
          .where({ movie_id: parent.id })
          .then(rows => rows.map(row => row.actor_id))
          .then(actors => knex("actors").whereIn("id", actors))
    }
  })
});

const ActorType = new GraphQLObjectType({
  name: "Actor",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    movies: {
      type: new GraphQLList(MovieType),
      resolve: (parent, args) =>
        knex("actors_movies")
          .select("movie_id")
          .where({ actor_id: parent.id })
          .then(rows => rows.map(row => row.movie_id))
          .then(movies => knex("movies").whereIn("id", movies))
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) =>
        knex("movies")
          .where({ id: args.id })
          .first()
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve: (parent, args) => knex("movies")
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
