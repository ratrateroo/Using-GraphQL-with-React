const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const { ApolloServer } = require("apollo-server-express");

const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 5000;

const app = express();
//app.use(cors);
const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

mongoose.connect(
  //mongodb+srv://mark:<password>@cluster0.r8v4z.mongodb.net/test
  "mongodb+srv://mark:markleo111@cluster0.r8v4z.mongodb.net/graphqldb?retryWrites=true&w=majority",

  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.once("open", () => {
  console.log("connected to the database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
  // bodyParser.json(),
  // graphqlExpress({ schema: schema })
);

app.listen(PORT, () => {
  console.log(`listening request on port ${PORT}`);
});
