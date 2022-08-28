const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const routes = require('./routes');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'development') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);


const serverStart = async (typeDefs, resolvers) => {
  const apollo_server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  })
  
  await apollo_server.start();

  apollo_server.applyMiddleware({app});

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`)
      console.log(`Use GraphQL at http://localhost:${PORT}${apollo_server.graphqlPath}`)});
  });
}

serverStart(typeDefs, resolvers);
