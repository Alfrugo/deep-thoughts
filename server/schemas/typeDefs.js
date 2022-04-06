// import the gql tagged template function

const { gql } = require ('apollo-server-express');

// create our typeDefs


const typeDefs = gql `
    type Thought {
        _id: ID
        thoughtText: String
        createAt: String
        username: String
        reactionCount: Int
        reactions: [Reaction]
    }
    type Reaction {
        _id: ID
        reactionBody: String
        createdAt: String
        username: String
    }

    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        thoughts: [Thought]
        friends: [User]
    }

    type Query {
        users: [User]
        user(usnername: String!): User
        thoughts(username: String): [Thought]
        thought(_id: ID!): Thought
    }
`;

// export te typeDefs
module.exports = typeDefs;

