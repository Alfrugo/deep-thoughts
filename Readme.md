# DEEP THOUGHTS

A user can sign up and log in to the application.

A user can post their thoughts and view other user's thoughts.

A user can react, or reply, to a thought.

A user can befriend other users.

In GraphQL:

    Queries: Queries are how we perform GET requests and ask for data from a GraphQL API.

    Mutations: Mutations are how we perform POST, PUT, and DELETE requests to create or manipulate data through a GraphQL API.

Two main components in GraphQL know as the schemas: 

    TypeDefs: involves literally defining every piece of data that the client can expect to work with.

    Resolvers: are the functions we connect to each query or mutation to perform CRUD.


# Mutation query examples

## hard coded basic structure of a mutation

mutation {
  addUser(username:"tester", password:"test12345", email:"test@test.com") {
    _id
    username
    email
  }
}

## same mutation query with variables wrapped around the function

mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    _id
    username
    email
  }
}
Variables heders...
{
  "username": "tester2",
  "password": "test12345",
  "email": "test2@test.com"
}

