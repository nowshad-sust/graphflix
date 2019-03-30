const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");

const { movies, actors } = require("./data");

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    Title: { type: GraphQLString },
    Genre: { type: GraphQLString },
    Year: { type: GraphQLString },
    Trailer: { type: GraphQLString },
    Images: { type: new GraphQLList(GraphQLString) },
    Details: { type: GraphQLString },
    Actors: {
      type: ActorType,
      resolve: (parent, args) =>
        actors.find(actor => parent.Actors === actor.id)
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
        movies.filter(movie => movie.Actors === parent.id)
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return movies.find(movie => movie.id == args.id);
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return movies;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
