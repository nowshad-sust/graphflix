const express = require("express");
const graphqlHTTP = require("express-graphql");
const depthLimit = require("graphql-depth-limit");
const cors = require("cors");
const schema = require("./schema");
const knex = require("./db/index");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    validationRules: [depthLimit(5)]
  })
);
app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
