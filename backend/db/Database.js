const mongoose = require("mongoose");
const { ApolloServer } = require('apollo-server')

const typeDefs = require('../graphql/typeDefs')
const resolvers = require('../graphql/resolvers')
const server = new ApolloServer({
typeDefs,
resolvers
})

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
      return server.listen({port: 5000})
    })
};

module.exports = connectDatabase;
