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

## using Jason Web Token (JWT) a regular login session: 

    {
        "username": "lernantino",
        "email": "lernantino@test.com"
    }

would look like this: 

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imxlcm5hbnRpbm8iLCJlbWFpbCI6Imxlcm5hbnRpbm9AdGVzdC5jb20ifQ.YEGu_cfAk7nBUM6la-GZGIr2zuugY3y4qLqlKybjCug

This way we can save the session on the front end and decrease the server-side reources needed to keep authentication alive. JWT also doesn't depend on cookies. 