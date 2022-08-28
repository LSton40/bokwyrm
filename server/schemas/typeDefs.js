const { gql } = require('apollo-server-express');
const { URLTypeDefinition } = require('graphql-scalars');

const typeDefs = [URLTypeDefinition, gql`

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int!
        savedBooks: [Book]!
    }

    type Book {
        _id: ID!
        authors: [String]
        description: String
        title: String!
        image: String
        link: URL
    }

    type Auth {
        token: ID!
        user: User
    }

    input bookInput {
        bookId: ID!
        authors: [String]
        description: String
        title: String!
        image: String
        link: URL
    }

    type Query  {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: bookInput): User
        removeBook(bookId: ID!): User
    }

`];

module.exports = typeDefs;